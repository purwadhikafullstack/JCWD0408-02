import { PropertyControler } from '@/controllers/property.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class PropertyRouter {
  private router: Router;
  private propertyController: PropertyControler;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.propertyController = new PropertyControler();
    this.authMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/get", this.propertyController.getProperty)
  }

  getRouter(): Router {
    return this.router;
  }
}
