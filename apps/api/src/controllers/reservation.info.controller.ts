import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';
const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

export class ReservationInfoController {
  async getAllReservation(req: Request, res: Response) {
    try {
      const data = await prisma.reservation.findMany({
        where: { user_Id: req.user?.id },
      });
      res.status(200).send(data);
    } catch (error) {
      responseError(res, error);
    }
  }

}
