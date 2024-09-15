import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';
import { createPaymentLink } from '@/services/reservation.service';
import { Request, Response } from 'express';

export class ReservationController {
  async createReservationVA(req: Request, res: Response) {
    try {
      const { price, user_Id, room_Id } = req.body;
      const startDate = new Date(req.body.startDate);
      const endDate = new Date(req.body.endDate);
      const now = Date.now();
      const dateNow = new Date(now);
      if (startDate >= endDate)
        throw 'The check-in date cannot be greater than or equal to the check-out date.';
      const room = await prisma.room.findUnique({ where: { id: +room_Id } });
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
        const reservation = await tx.reservation.create({
          data: {
            price,
            startDate,
            endDate,
            paymentLink: '',
            user_Id: user_Id,
            room_Id: room.id,
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
      console.log(error);
    }
  }
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
}
