import { ReservationInfoController } from '@/controllers/reservation.info.controller';

import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';
export class ReservationInfoRouter {
  private router: Router;
  private authMiddleware: AuthMiddleware;
  private reservationInfoController: ReservationInfoController;

  constructor() {
    this.router = Router();
    this.reservationInfoController = new ReservationInfoController();
    this.authMiddleware = new AuthMiddleware();
    this.initalizeRoutes();
  }

  private initalizeRoutes(): void {
    this.router.get(
      '/',
      this.authMiddleware.verifyTokenOtp,
      this.reservationInfoController.getAllReservation,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
