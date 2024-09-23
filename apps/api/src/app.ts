import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { UserRouter } from './routers/user.router';
import { TenantRouter } from './routers/tenant.router';
import { ReservationRouter } from './routers/reservation.user.router';
import { TenantTransactionRouter } from './routers/tenant.transaction.router';
import { ReviewRouter } from './routers/review.router';
import { ReservationInfoRouter } from './routers/reservation.info.router';
import { DecodeTokenRouter } from './routers/decode.route';
import { PropertyRouter } from './routers/property.route';
import path from 'path';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(
      '/api/public',
      express.static(path.join(__dirname, '../public')),
    );
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const userRouter = new UserRouter();
    const tenantRouter = new TenantRouter();
    const reservationRouter = new ReservationRouter();
    const tenantTransactionRouter = new TenantTransactionRouter();
    const reviewRouter = new ReviewRouter();
    const reservationInfoRouter = new ReservationInfoRouter();
    const decodeTokenRouter = new DecodeTokenRouter();
    const propertyRouter = new PropertyRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/users', userRouter.getRouter());
    this.app.use('/api/tenant', tenantRouter.getRouter());
    this.app.use('/api/reservation', reservationRouter.getRouter());
    this.app.use('/api/tenantTransaction', tenantTransactionRouter.getRouter());
    this.app.use('/api/review', reviewRouter.getRouter());
    this.app.use('/api/reservationInfo', reservationInfoRouter.getRouter());
    this.app.use('/api/decode', decodeTokenRouter.getRouter());
    this.app.use('/api/property', propertyRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
