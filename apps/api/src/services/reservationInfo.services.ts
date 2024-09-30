import { IReservationUser } from '@/types/reservationInfo';
import prisma from '../prisma';

export class reservationInfoService {
  constructor() {}
  async getReservationUser(payload: IReservationUser) {
    try {
      interface IFilterQuery {
        AND: any[];
      }
      const filterQuery: IFilterQuery = {
        AND: [{ user_Id: payload.user_id }],
      };
      if (payload.booking_id) {
        filterQuery.AND.push({ id: payload.booking_id });
      }
      const data = await prisma.reservation.findMany({
        where: filterQuery,
        include: {
          room: { include: { property: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      return data;
    } catch (error) {
      throw new Error('Gagal Mendapatkan Data Reservasi');
    }
  }
  async getReservationByTenant(payload: any) {
    try {
      // const filter = AND[{}]
      // status ? { statusRes: status } : {};
      interface IFilterQuery {
        AND: any[];
      }
      const filterQuery: IFilterQuery = {
        AND: [{ room: { tenant_Id: payload.tenant_id } }],
      };

      if (payload.statusString) {
        filterQuery.AND.push({ statusRes: payload.statusString });
      }
      const data = await prisma.reservation.findMany({
        where: filterQuery,
        select: {
          createdAt: true,
          id: true,
          statusRes: true,
          startDate: true,
          endDate: true,
          user: {
            select: {
              username: true,
            },
          },
          room: {
            select: {
              type: true,
              tenant_Id: true,
              property: { select: { name: true } },
            },
          },
        },
      });
      return data;
    } catch (error) {
      throw new Error('Gagal Mendapatkan Data Reservasi');
    }
  }
}
export const reservationInfoServices = new reservationInfoService();
