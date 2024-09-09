import { User } from '@prisma/client';
import { checkExistingAccount } from '../checkExistingAccount';
import prisma from '@/prisma';

export const registerServicesUser = async (body: User) => {
  try {
    const { email } = body;
    await checkExistingAccount(email);
    const createUser = await prisma.user.create({
      data: { email },
    });

    return createUser;
  } catch (error) {
    throw error;
  }
};
