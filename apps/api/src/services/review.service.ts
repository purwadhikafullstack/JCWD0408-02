import { ICreateReview } from '@/types/review';
import prisma from '../prisma';

export class reviewService {
  constructor() {}
  async createReview(payload: ICreateReview) {
    try {
      const { reservation_id, content, ratings } = payload;
      const now: Date = new Date(Date.now());

      const reservation = await prisma.reservation.findFirst({
        where: { id: reservation_id },
      });
      const endDate = new Date(reservation?.endDate!);

      if (now < endDate!)
        throw new Error('Belum bisa memberikan review sebelum menginap');
      const review = await prisma.review.findFirst({
        where: { reservation_Id: reservation?.id },
      });
      if (review) throw new Error('Anda sudah megulas reservasi ini');
      const data = await prisma.review.create({
        data: {
          content,
          reservation_Id: reservation_id,
          user_Id: +reservation?.user_Id!,
          ratings: ratings,
          room_Id: reservation?.room_Id!,
        },
      });

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Terjadi kesalahan yang tidak terduga');
      }
    }
  }
  async getReviewbyTenant(tenant_id: number) {
    try {
      const data = await prisma.review.findMany({
        where: { reservation: { room: { tenant_Id: tenant_id } } },
        include: {
          user: { select: { username: true, avatar: true } },
          room: { select: { property: { select: { name: true } } } },
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
  async getReviewByReservation(reservation_id: string) {
    try {
      const data = await prisma.review.findMany({
        where: { reservation_Id: reservation_id },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
  async getReviewByProperty(property_id: string) {
    try {
      const data = await prisma.review.findMany({
        where: { reservation: { room: { property_Id: property_id } } },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}
export const reviewServices = new reviewService();
