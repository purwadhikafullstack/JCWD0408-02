import prisma from '@/prisma';
import { Room } from '@prisma/client';

const base_url = process.env.BASE_URL_BACKEND || 'http://localhost/8000/api';

export const getRoomServices = async (propertyId: string) => {
  try {
    const room = await prisma.room.findMany({
      where: { property_Id: propertyId },
    });

    return room;
  } catch (error) {
    throw error;
  }
};

export const createRoomServices = async (
  propertyId: string,
  tenantId: number,
  body: Room,
  facility: string[],
  files: Express.Multer.File[],
) => {
  try {
    const { price, pricediscount, capacity, description, type } = body;
    const images = files.map(
      (file) => `${base_url}/public/rooms/${file.filename}`,
    );
    const rooms = await prisma.room.create({
      data: {
        price,
        pricediscount,
        capacity,
        description,
        type,
        property_Id: propertyId,
        tenant_Id: tenantId,
        facility: {
          create: facility.map((name) => ({
            name,
          })),
        },
        RoomPic: {
          create: images.map((url) => ({
            url,
          })),
        },
      },
      include: {
        facility: true,
        RoomPic: true,
      },
    });

    return rooms;
  } catch (error) {
    throw error;
  }
};
