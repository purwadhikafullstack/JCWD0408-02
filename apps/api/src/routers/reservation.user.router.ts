import { ReservationController } from '@/controllers/reservation.user.controller';
import { uploader } from '@/services/uploader';
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
    this.router.post('/TF', this.reservationController.createReservationTF);
    this.router.post('/TF/proof',uploader('proof','/proof').single('media'), this.reservationController.uploadPaymentProof);
  }
  getRouter(): Router {
    return this.router;
  }
}
