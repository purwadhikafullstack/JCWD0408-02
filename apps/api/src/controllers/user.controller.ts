import prisma from '@/prisma';
import {
  getUserServices,
  loginUserServices,
  registerServicesUser,
  updateDatauserServices,
  verifyOtpServices,
} from '@/services/account/user.services';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { createUser, token } = await registerServicesUser(req.body);
      return res.status(200).send({
        status: 'ok',
        msg: 'Registration is successful, please check your email for verification',
        token,
        createUser,
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) throw new Error('Authorization header is required');
      const token = authHeader.replace('Bearer ', '');
      const { otp } = req.body;
      if (!token || !otp) throw new Error('Otp are required');
      const result = await verifyOtpServices(token, otp);
      return res.status(200).send({
        status: 'ok',
        msg: 'Verification successful',
        result,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateDatauser(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) throw new Error('Authorization header is required');
      const token = authHeader.replace('Bearer ', '');
      const result = await updateDatauserServices(req.body, token);
      return res.status(200).send({
        status: 'ok',
        msg: 'Email has been registered, please login',
        result,
      });
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, token } = await loginUserServices(req.body);
      return res.status(200).send({
        status: 'ok',
        msg: 'Login succes',
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  async getusers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUserServices();
      return res.status(200).send({
        status: 'ok',
        result,
      });
    } catch (error) {
      next(error);
    }
  }
}
