import { responseError } from '@/helper/ResponseError';
import { Request, Response } from 'express';
import prisma from '@/prisma';

export class TenantTransactionController {
  async confirmPayment(req: Request, res: Response) {
    const { id } = req.body;
    try {
      const statusPaid = await prisma.reservation.findFirst({
        where: { id: +id, statusRes: 'PAID' },
      });
      const statusCancel = await prisma.reservation.findFirst({
        where: { id: +id, statusRes: 'CANCEL' },
      });
      if (statusPaid) throw 'Transaction already accepted';
      if (statusCancel) throw 'Transaction already canceled';

      await prisma.reservation.update({
        data: { statusRes: 'PAID' },
        where: { id: +id },
      });
      res.status(200).send({ status: 'OK', msg: 'Transaction Accepted' });
    } catch (error) {
      responseError(res, error);
    }
  }
  async rejectPayment(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const statusAcc = await prisma.reservation.findFirst({
        where: { id: +id, statusRes: 'PAID' },
      });
      if (statusAcc) throw 'Transaksi Sudah di Diterima! ';
      await prisma.reservation.update({
        data: { statusRes: 'PENDING' },
        where: { id: +id },
      });

      res.status(200).send({ status: 'OK', msg: 'Transaction Rejected' });
    } catch (error) {
      responseError(res, error);
    }
  }
  async getReservationbyStatus(req: Request, res: Response) {
    try {
      const data = await prisma.reservation.findMany({});
      res.status(200).send(data);
    } catch (error) {
      responseError(res, error);
    }
  }

  async cancelUserOrder(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const reservation = await prisma.reservation.findFirst({
        where: { id: +id },
      });
      if (reservation?.paymentProof)
        throw 'Error, user sudah mengupload bukti pembayaran !';
      await prisma.reservation.update({
        where: { id: +id },
        data: { statusRes: 'CANCEL' },
      });
      res.status(200).send({
        status: 'OKE',
        msg: 'Order Canceled',
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
