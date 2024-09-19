import { responseError } from '@/helper/ResponseError';
import prisma from '@/prisma';
import { Request, Response } from 'express';

export class PropertyControler {
  async getProperty(req: Request, res: Response) {
    try {
      const property = await prisma.property.findMany();
      return res.status(200).send({
        status: 'OK',
        property,
      });
    } catch (error) {
      responseError(res, error);
    }
  }

  async createPropertyController(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
}
