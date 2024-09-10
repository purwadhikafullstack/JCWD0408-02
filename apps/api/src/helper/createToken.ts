import { sign } from 'jsonwebtoken';

interface IPayload {
  id: number;
  role: string;
}

const secret = process.env.SECRET_KEY || 'nezztar';

export const createToken = (payload: IPayload, expires: string) => {
  const token = sign(payload, secret, { expiresIn: expires });
  return token;
};
