import { SalesReportController } from '@/controllers/report.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class ReportSalesRouter {
  private router: Router;
  private reportController: SalesReportController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.reportController = new SalesReportController();
    this.router = Router();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/byproperty',
      this.authMiddleware.verifyTokenOtp,
      this.reportController.getReportByProperty,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
