import { Request, Response } from 'express';
import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';

export class ReviewController {
  //MEMBUAT REVIEW
  async createReview(req: Request, res: Response) {
    try {
      const { reservation_id, room_id, content, ratings } = req.body;
      const now: Date = new Date(Date.now());

      const room = await prisma.reservation.findFirst({
        where: { id: reservation_id },
      });
      if (now > room?.endDate!)
        throw 'Belum bisa memberikan review sebelum menginap';

      const data = await prisma.review.create({
        data: {
          content,
          reservation_Id: reservation_id,
          user_Id: +req.user?.id!,
          ratings: ratings,
          room_Id: room?.room_Id!,
        },
      });
      res.status(201).send({
        status: 'OK',
        data,
      });
    } catch (error) {
      responseError(res, error);
    }
  }
  //GET REVIEW
  async getReview(req: Request, res: Response) {
    try {
      const data = await prisma.review.findMany({
        where: { room_Id: req.body.room_id },
      });
      res.status(200).send({ status: 'ok', data });
    } catch (error) {
      responseError(res, error);
    }
  }

  //FEEDBACK
  async feedBackReview(req: Request, res: Response) {
    try {
      const { feedback, review_id } = req.body;
      await prisma.review.update({
        where: { id: +review_id },
        data: { feedBack: feedback },
      });
      res.status(201).send('Feedback Posted');
    } catch (error) {
      responseError(res, error);
    }
  }
}
