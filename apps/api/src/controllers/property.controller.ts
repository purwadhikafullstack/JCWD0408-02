import { responseError } from '@/helper/ResponseError';
import {
  createPropertyServices,
  createRoomServices,
  getPropertyActiveServices,
  getPropertyByidServices,
  getRoomServices,
  publishPropertyServices,
} from '@/services/property.services';
import { NextFunction, Request, Response } from 'express';

export class PropertyControler {
  async getProperty(req: Request, res: Response) {
    try {
      const property = await getPropertyActiveServices();
      return res.status(200).send({
        status: 'OK',
        property,
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async getPropertyByid(req: Request, res: Response) {
    try {
      const property = await getPropertyByidServices(req.params.id);
      return res.status(200).send({
        status: 'ok',
        property,
      });
    } catch (error) {
      responseError(res, error);
    }
  }

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

  async createPropertyController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createPropertyServices(
        req.user?.id!,
        req.body,
        req.file?.filename!,
      );
      res.status(200).send({
        status: 'ok',
        msg: 'Property created',
        result,
      });
    } catch (error) {
      next(error);
    }
  }

  async createRoomController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createRoomServices(
        req.params.id,
        req.user?.id!,
        req.body,
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

  async publishProperty(req: Request, res: Response, next: NextFunction) {
    try {
      await publishPropertyServices(req.params.id);
      return res.status(200).send({
        status: 'OK',
        msg: 'Property has been published',
      });
    } catch (error) {
      next(error);
    }
  }
}
