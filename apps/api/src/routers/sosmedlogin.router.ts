import { SosmedLoginController } from '@/controllers/sosmedlogin.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class SosmedLoginRouter {
  private router: Router;
  private sosmedLoginController: SosmedLoginController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.sosmedLoginController = new SosmedLoginController();
    this.authMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/google', this.sosmedLoginController.LoginGoogle);
    this.router.post('/google-t', this.sosmedLoginController.LoginGoogleTenant);
  }

  getRouter(): Router {
    return this.router;
  }
}
