import {
  registerServicesTenant,
  updateDataTenantServices,
  verifyOtpServicesTenant,
} from '@/services/account/tenant.services';
import { NextFunction, Request, Response } from 'express';

export class TenantController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { createTenant, token } = await registerServicesTenant(req.body);
      return res.status(200).send({
        status: 'ok',
        msg: 'Registration is successful, please check your email for verification',
        token,
        createTenant,
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
      const result = await verifyOtpServicesTenant(token, otp);
      return res.status(200).send({
        status: 'ok',
        msg: 'Verification successful',
        result,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateDataTenant(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) throw new Error('Authorization header is required');
      const token = authHeader.replace('Bearer ', '');
      const result = await updateDataTenantServices(req.body, token);
      return res.status(200).send({
        status: 'ok',
        msg: 'Email has been registered, please login',
        result,
      });
    } catch (error) {
      next(error);
    }
  }
}
