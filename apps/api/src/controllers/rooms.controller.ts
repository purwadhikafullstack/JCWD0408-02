import { responseError } from '@/helper/ResponseError';
import {
  createRoomServices,
  deleteRoomServices,
  getRoomServices,
} from '@/services/rooms.services';
import { NextFunction, Request, Response } from 'express';

export class RoomController {
  async getRoom(req: Request, res: Response) {
    try {
      const room = await getRoomServices(req.params.id);
      return res.status(200).send({
        status: 'OK',
        room,
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async createRoomController(req: Request, res: Response, next: NextFunction) {
    try {
      const { price, pricediscount, capacity, description, type, facility } =
        req.body;
      const files = req.files as Express.Multer.File[];
      const roomData = {
        id: '',
        price: parseFloat(price),
        pricediscount: parseFloat(pricediscount),
        capacity: parseInt(capacity),
        description,
        type,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        property_Id: req.params.id,
        tenant_Id: req.user?.id!,
      };
      const result = await createRoomServices(
        roomData.property_Id,
        roomData.tenant_Id,
        roomData,
        facility ? facility.split(',') : [],
        files,
      );
      res.status(200).send({
        status: 'ok',
        msg: 'Room created',
        result,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteRoom(req: Request, res: Response) {
    try {
      await deleteRoomServices(req.params.id);
      return res.status(200).send({
        status: 'OK',
        msg: "Room deleted"
      });
    } catch (error) {
      responseError(res, error);
    }
  }
}