import { TenantController } from '@/controllers/tenant.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class TenantRouter {
  private router: Router;
  private tenantController: TenantController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.tenantController = new TenantController();
    this.authMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.tenantController.register);
    this.router.post('/verify-otp', this.tenantController.verifyOtp);
    this.router.post('/update-data', this.tenantController.updateDataTenant);
  }

  getRouter(): Router {
    return this.router;
  }
}
