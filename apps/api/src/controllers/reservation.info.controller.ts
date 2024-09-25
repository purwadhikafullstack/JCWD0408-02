import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';
const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

export class ReservationInfoController {
  async getReservationUser(req: Request, res: Response) {
    try {
      interface IFilterQuery {
        AND: any[];
      }

      const { booking_id } = req.query;
      const filterQuery: IFilterQuery = {
        AND: [{ user_Id: req.user?.id }],
      };
      if (booking_id) {
        filterQuery.AND.push({ id: booking_id });
      }
      const data = await prisma.reservation.findMany({
        where: filterQuery,
        include: {
          room: { include: { property: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).send({
        status: 'OK',
        data: data,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}
