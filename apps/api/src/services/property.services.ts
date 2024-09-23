import prisma from '@/prisma';
import { Property, Room } from '@prisma/client';

const base_url = process.env.BASE_URL_BACKEND || 'http://localhost/8000/api';

export const createPropertyServices = async (
  TenantId: number,
  body: Property,
  file: string,
) => {
  try {
    const { name, category, description, location } = body;
    const exisProperty = await prisma.property.findFirst({
      where: { name },
    });

    if (exisProperty)
      throw new Error(
        'Property already exist, please change your property name',
      );
    const image = `${base_url}/public/property/${file}`;
    const property = await prisma.property.create({
      data: {
        name,
        category,
        description,
        location,
        thumbnail: image,
        tenant_Id: TenantId,
      },
    });

    return property;
  } catch (error) {
    throw error;
  }
};

export const createRoomServices = async (
  propertyId: string,
  tenantId: number,
  body: Room,
) => {
  try {
    const { price, pricediscount, capacity, description, facility, type } =
      body;
    const rooms = await prisma.room.create({
      data: {
        price,
        pricediscount,
        capacity,
        description,
        facility,
        type,
        property_Id: +propertyId,
        tenant_Id: tenantId,
      },
    });

    return rooms;
  } catch (error) {
    throw error;
  }
};

export const publishPropertyServices = async (propertyId: string) => {
  try {
    const updateProperti = await prisma.property.update({
      where: { id: +propertyId },
      data: {
        isActive: true,
      },
    });

    return updateProperti;
  } catch (error) {
    throw error;
  }
};

export const getPropertyActiveServices = async () => {
  try {
    const property = await prisma.property.findMany({
      where: { isActive: true },
      include: { Room: true },
    });

    return property;
  } catch (error) {
    throw error;
  }
};

export const getPropertyByidServices = async (propertyId: string) => {
  try {
    const property = await prisma.property.findFirst({
      where: { id: +propertyId },
      include: { Room: true },
    });

    return property;
  } catch (error) {
    throw error;
  }
};

export const getRoomServices = async (propertyId: string) => {
  try {
    const room = await prisma.room.findMany({
      where: { property_Id: +propertyId},
    });

    return  room
  } catch (error) {
    throw error;
  }
};
