import { createToken } from '@/helper/createToken';
import prisma from '@/prisma';

export const LoginGoogleServices = async (
  email: string,
  avatar: string | null,
  username: string,
) => {
  try {
    let userData = await prisma.user.findUnique({
      where: { email, provider: 'GOOGLE' },
    });

    if (!userData) {
      userData = await prisma.user.create({
        data: {
          email,
          avatar,
          username,
          isVerify: true,
          provider: 'GOOGLE',
        },
      });
    }
    const payload = {
      id: userData.id,
      role: userData.role,
      username: userData.username!,
      email: userData.email,
      phone: userData.phone!,
    };
    const token = createToken(payload, '1d');

    return { userData, token };
  } catch (error) {
    throw error;
  }
};

export const LoginGoogleTenantServices = async (
  email: string,
  avatar: string | null,
  username: string,
) => {
  try {
    let userData = await prisma.tenant.findUnique({
      where: { email, provider: 'GOOGLE' },
    });

    if (!userData) {
      userData = await prisma.tenant.create({
        data: {
          email,
          avatar,
          username,
          isVerify: true,
          provider: 'GOOGLE',
        },
      });
    }
    const payload = {
      id: userData.id,
      role: userData.role,
      username: userData.username!,
      email: userData.email,
      phone: userData.phone!,
    };
    const token = createToken(payload, '1d');
    return { userData, token };
  } catch (error) {
    throw error;
  }
};
