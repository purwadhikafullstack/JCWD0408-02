import { registerServicesUser } from '@/services/user/register.services';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerServicesUser(req.body);
      return res.status(200).send({
        status: 'ok',
        msg: 'Registration is successful, please check your email for verification',
        result,
      });
    } catch (error) {
      next(error);
    }
  }
}
