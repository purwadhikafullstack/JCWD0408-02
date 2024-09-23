import { PropertyControler } from '@/controllers/property.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { uploader } from '@/services/uploader';
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
    this.router.get('/get', this.propertyController.getProperty);
    this.router.post(
      '/create',
      this.authMiddleware.verifyTokenOtp,
      uploader('property', '/property').single('thumbnail'),
      this.propertyController.createPropertyController,
    );
    this.router.post("/publish/:id", this.propertyController.publishProperty)
    this.router.get("/:id", this.propertyController.getPropertyByid)
    this.router.get('/get-room/:id', this.propertyController.getRoom);
    this.router.post(
      '/create-room/:id',
      this.authMiddleware.verifyTokenOtp,
      this.propertyController.createRoomController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
