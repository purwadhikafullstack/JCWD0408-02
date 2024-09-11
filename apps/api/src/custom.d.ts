type User = {
  id: number;
  role: string;
  otp: string;
  email: string
};
declare namespace Express {
  export interface Request {
    user?: User;
  }
}
