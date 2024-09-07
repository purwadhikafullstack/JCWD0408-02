import prisma from '@/prisma';
import axios from 'axios';
import { Request, Response } from 'express';

export class TransactionController {
  async createReservation(req: Request, res: Response) {
    const { startDate, endDate, user_id, price, room_id } = req.body;
    // const user = await prisma.user.findFirst({
    //     where: { id: req.user?.id },
    //   });
    await prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.create({
        data: {
          price,
          user_Id: user_id,
          room_Id: room_id,
          startDate,
          endDate,
        },
      });
    });
  }
}
