import prisma from '@/prisma';

export const checkExistingAccount = async (email: string) => {
  const existUser = await prisma.user.findFirst({ where: { email } });
  const existTenant = await prisma.tenant.findFirst({ where: { email } });
  if (existUser) throw new Error('Email already exist, please change your email');
  if (existTenant) throw new Error('Email already exist, please change your email');
};
