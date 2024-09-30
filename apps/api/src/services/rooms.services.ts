import prisma from '@/prisma';
import { GetRoomsParams } from '@/types/room';
import { Room } from '@prisma/client';

const base_url = process.env.BASE_URL_BACKEND || 'http://localhost/8000/api';

export const getRoomServices = async (propertyId: string) => {
  try {
    const room = await prisma.room.findMany({
      where: { property_Id: propertyId },
      include: {
        RoomPic: {
          select: {
            url: true,
          },
        },
        facility: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
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

export const deleteRoomServices = async (id: string) => {
  try {
    await prisma.roomPic.deleteMany({
      where: { room_Id: id },
    });
    await prisma.facility.deleteMany({
      where: { roomId: id },
    });
    const rooms = await prisma.room.delete({
      where: { id },
    });
    return rooms;
  } catch (error) {
    console.log('thwd', error);
    throw error;
  }
};

export const getRoomsByIdServices = async (room_Id: string) => {
  try {
    const room = await prisma.room.findMany({
      where: { id: room_Id },
      include: {
        RoomPic: {
          select: {
            url: true,
          },
        },
        facility: {
          select: {
            name: true,
          },
        },
        property: true,
        tenant: { select: { username: true } },
      },
    });
    return room;
  } catch (error) {
    throw error;
  }
};

export const getAllRoomsServices = async (params: GetRoomsParams) => {
  try {
    const {
      sortBy = 'price',
      sortOrder = 'asc',
      propertyName,
      location,
      category,
      page = 1,
      take = 10,
      minPrice,
      maxPrice,
    } = params;
    const skip = (page - 1) * take;
    const where: any = {
      availability: true,
      price: { gte: minPrice, lte: maxPrice },
    };
    if (propertyName) {
      where.property = {
        ...where.property,
        name: { contains: propertyName },
      };
    }
    if (category) {
      where.property = { ...where.property, category };
    }
    if (location) {
      where.property = { ...where.property, location: { contains: location } };
    }
    const orderBy: any = {};
    if (sortBy === 'name') {
      orderBy.property = { name: sortOrder };
    } else {
      orderBy.price = sortOrder;
    }
    const room = await prisma.room.findMany({
      where,
      orderBy,
      include: {
        RoomPic: { select: { url: true } },
        facility: { select: { name: true } },
        property: { select: { name: true, location: true, category: true } },
      },
      skip,
      take,
    });
    const totalRooms = await prisma.room.count({ where });
    const total = room.length;
    return { totalPage: Math.ceil(totalRooms / take), total, room };
  } catch (error) {
    throw error;
  }
};
