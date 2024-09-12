import { UserController } from '@/controllers/user.controller';
import { AuthMiddleware } from '@/middleware/auth.middleware';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.userController = new UserController();
    this.authMiddleware = new AuthMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.userController.register);
    this.router.post('/verify-otp', this.userController.verifyOtp);
    this.router.post('/update-data', this.userController.updateDatauser);
    this.router.post('/login', this.userController.loginUser);
    this.router.post('/forgot-password', this.userController.forgotPasswordUser);
    this.router.patch('/reset-password',this.authMiddleware.verifyTokenOtp, this.userController.resetPasswordUser);
    this.router.get('/getusers',this.authMiddleware.verifyTokenOtp, this.userController.getusers,);
  }

  getRouter(): Router {
    return this.router;
  }
}
