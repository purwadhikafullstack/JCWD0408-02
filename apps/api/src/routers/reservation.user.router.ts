import { ReservationController } from '@/controllers/reservation.user.controller';
import { Router } from 'express';

export class ReservationRouter {
  private router: Router;
  private reservationController: ReservationController;

  constructor() {
    this.router = Router();
    this.reservationController = new ReservationController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/VA', this.reservationController.createReservationVA);
    this.router.post(
      '/VA/status',
      this.reservationController.updateStatusTrans,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
