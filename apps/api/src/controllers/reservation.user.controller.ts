import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';
import { createPaymentLink } from '@/services/reservation.service';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
export class ReservationController {
  async createReservationVA(req: Request, res: Response) {
    try {
      const { price } = req.body;
      const { room_id } = req.params;

      const startDate = new Date(req.body.startDate);
      const endDate = new Date(req.body.endDate);
      const now = Date.now();
      const dateNow = new Date(now);
      if (startDate >= endDate)
        throw 'The check-in date cannot be greater than or equal to the check-out date.';
      const room = await prisma.room.findFirst({ where: { id: +room_id } });
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
      if (startDate < dateNow)
        throw 'Waktu Check-in tidak valid (sudah melewati tanggal hari ini)';
      //MENCARI TANGGAL YANG SUDAH DI PESAN DI ROOM YANG SAMA
      const roomReserved = await prisma.reservation.findFirst({
        //BOLEH DI HARI USER LAIN CHECKOUT
        where: {
          OR: [
            {
              startDate: { lt: endDate },
              endDate: { gt: startDate },
            },
            {
              startDate: { gte: startDate },
              endDate: { lte: endDate },
            },
          ],
        },
      });
      if (roomReserved) throw 'Room has ben reserved';
      await prisma.$transaction(async (tx) => {
        const id = uuidv4();
        const reservation = await tx.reservation.create({
          data: {
            price,
            startDate,
            endDate,
            paymentLink: '',
            user_Id: +req.user?.id!,
            room_Id: +room_id,
          },
        });

        //MIDTRANS
        const paymentLinkURL = await createPaymentLink(
          reservation.id.toString(),
          price,
        );
        const URL = paymentLinkURL.redirect_url;
        //UPDATE LINK URL
        await tx.reservation.update({
          data: {
            paymentLink: URL,
          },
          where: {
            id: reservation.id,
          },
        });
        res.status(201).send({
          msg: 'Success',
          reservation,
          URL,
        });
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  //MENGUPDATE STATUS TRANS MENJADI PAID
  async updateStatusTrans(req: Request, res: Response) {
    try {
      const { transaction_status } = req.body;
      const order_id = +req.body.order_id.replace('ORDERID-', '');
      if (transaction_status == 'settlement')
        await prisma.reservation.update({
          data: { statusRes: 'PAID' },
          where: { id: order_id },
        });

      return res.status(200).send({
        msg: 'success update status reservation',
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async createReservationTF(req: Request, res: Response) {
    try {
      const { price } = req.body;
      const { room_id } = req.params;
      const startDate = new Date(req.body.startDate);
      const endDate = new Date(req.body.endDate);
      const now = Date.now();
      const dateNow = new Date(now);
      if (startDate >= endDate)
        throw 'The check-in date cannot be greater than or equal to the check-out date.';
      const room = await prisma.room.findUnique({ where: { id: +room_id } });
      if (!room) {
        // return res.status(404).json({ message: 'Room not found' });
        throw 'Room not found !';
      }
      if (startDate < dateNow)
        throw 'Waktu Check-in tidak valid (sudah melewati tanggal hari ini)';
      //MENCARI TANGGAL YANG SUDAH DI PESAN DI ROOM YANG SAMA
      const roomReserved = await prisma.reservation.findFirst({
        //BOLEH DI HARI USER LAIN CHECKOUT
        where: {
          OR: [
            {
              startDate: { lt: endDate },
              endDate: { gt: startDate },
            },
            {
              startDate: { gte: startDate },
              endDate: { lte: endDate },
            },
          ],
        },
      });
      if (roomReserved) throw 'Room has ben reserved';

      const reservation = await prisma.reservation.create({
        data: {
          price,
          startDate,
          endDate,
          statusRes: 'CONFIRMATION',
          user_Id: +req.user?.id!,

          room_Id: +room_id,
        },
      });
      res.status(200).send(reservation);
    } catch (error) {
      responseError(res, error);
    }
  }

  async uploadPaymentProof(req: Request, res: Response) {
    try {
      const { reservation_id } = req.params;
      let media = null;
      if (req.file) {
        media = `${base_url}/api/public/proof/${req.file?.filename}`;
        
      }
      await prisma.reservation.update({
        data: { paymentProof: media },
        where: { id: +reservation_id },
      });
      res.status(200).send('OKE');
    } catch (error) {
      responseError(res, error);
    }
  }
  async cancelOrder(req: Request, res: Response) {
    try {
      const { reservation_id } = req.body;
      await prisma.reservation.update({
        where: { id: +reservation_id },
        data: { statusRes: 'CANCEL' },
      });
      res.status(200).send('Transaction Canceled');
    } catch (error) {
      responseError(res, error);
    }
  }
}
