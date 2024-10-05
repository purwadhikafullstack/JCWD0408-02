import prisma from '../prisma';
export interface IPropsReport {
  tenant_id: number;
}
export class reportSalesService {
  constructor() {}
  async getReportByProperty({ tenant_id }: IPropsReport) {
    try {
      const properties = await prisma.property.findMany({
        where: { tenant_Id: tenant_id },
        select: {
          id: true,
          name: true,
          Room: {
            select: {
              id: true,
              Reservation: {
                where: { statusRes: 'PAID' },
                select: {
                  id: true,
                  price: true,
                },
              },
            },
          },
        },
      });

      const data = properties.map((prop) => {
        const totalReservation = prop.Room.reduce(
          (acc, room) => acc + room.Reservation.length,
          0,
        );
        const totalAmount = prop.Room.reduce((acc, room) => {
          return (
            acc +
            room.Reservation.reduce(
              (acc, reservation) => acc + reservation.price,
              0,
            )
          );
        }, 0);
        return {
          propertyId: prop.id,
          propertyName: prop.name,
          totalReservation,
          totalAmount,
        };
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export const reportSalesServices = new reportSalesService();
