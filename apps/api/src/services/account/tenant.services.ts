import { transporter } from '@/helper/nodemailer';
import { checkExistingAccount } from '../checkExistingAccount';
import { generateOtp } from '@/helper/generateOtp';
import prisma from '@/prisma';
import { Tenant } from '@prisma/client';
import { verify } from 'jsonwebtoken';
import { hashPass } from '@/helper/hashPass';
import { compare } from 'bcrypt';
import { createToken } from '@/helper/createToken';

const secret = process.env.SECRET_KEY || 'nezztar';

const sendVerifikationMailUser = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verifikasi email',
    text: `Kode OTP Anda adalah ${otp}`,
  };
  await transporter.sendMail(mailOptions);
};

export const registerServicesTenant = async (body: Tenant) => {
  try {
    const { email } = body;
    await checkExistingAccount(email);
    const { otp, token } = generateOtp(email);
    const otpExpired = new Date();
    otpExpired.setMinutes(otpExpired.getMinutes() + 5);
    const createTenant = await prisma.tenant.create({
      data: { email, otp, otpExpired },
    });
    await sendVerifikationMailUser(email, otp);
    return { createTenant, token };
  } catch (error) {
    throw error;
  }
};

export const verifyOtpServicesTenant = async (token: string, otp: string) => {
  try {
    const verifytoken = verify(token, secret) as { email: string; otp: string };
    const email = verifytoken.email;
    const otpToken = verifytoken.otp;
    const currentTime = new Date();
    if (otp !== otpToken) throw new Error('Invalid otp code');
    const user = await prisma.tenant.findUnique({ where: { email } });
    if (!user) throw new Error('User notfound');
    if (user.otpExpired && currentTime > user.otpExpired)
      throw new Error('Otp code has expired');
    const updateUser = await prisma.tenant.update({
      where: { email },
      data: {
        isVerify: true,
        otp: null,
        otpExpired: null,
      },
    });

    return updateUser;
  } catch (error) {
    throw error;
  }
};

export const updateDataTenantServices = async (body: Tenant, token: string) => {
  try {
    const { username, phone, password } = body;
    const verifyToken = verify(token, secret) as { email: string };
    const email = verifyToken.email;
    const user = await prisma.tenant.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');
    const hashPassword = await hashPass(password!);
    const updateData = await prisma.tenant.update({
      where: { email },
      data: {
        username: username,
        phone: phone,
        password: hashPassword,
      },
    });

    return updateData;
  } catch (error) {
    throw error;
  }
};

export const loginTenantServices = async (body: Tenant) => {
  try {
    const { email, password } = body;
    const user = await prisma.tenant.findFirst({ where: { email, provider: "CREDENTIAL" } });
    if (!user) throw new Error('User not found');
    if (!user.isVerify)
      throw new Error('User not verify, please verify for login');
    const isValidPass = await compare(password!, user.password!);
    if (!isValidPass)
      throw new Error(
        'Password is incorrect, please enter the correct password',
      );
    const payload = {
      id: user.id,
      role: user.role,
      username: user.username!,
      email: user.email,
      phone: user.phone!,
    };
    const token = createToken(payload, '1d');

    return { user, token };
  } catch (error) {
    throw error;
  }
};

export const forgotPasswordTenantServices = async (email: string) => {
  try {
    const user = await prisma.tenant.findFirst({
      where: { email, provider: 'CREDENTIAL' },
    });
    if (!user) throw new Error('Invalid email address');
    const payload = {
      id: user.id,
      role: user.role,
      username: user.username!,
      email: user.email,
      phone: user.phone!,
    };
    const token = createToken(payload, '30m');
    const link = process.env.BASE_URL_FRONTEND + `/account/forgot-password-tenant/${token}`;
    await transporter.sendMail({
      to: email,
      subject: 'Link reset password',
      html: `<a href="${link}" target="_blank">Reset password here</a>`,
    });

    return user
  } catch (error) {
    throw error;
  }
};

export const resetPasswordTenantServices = async (
  userId: number,
  password: string,
) => {
  try {
    const user = await prisma.tenant.findFirst({
      where: { id: userId, provider: 'CREDENTIAL' },
    });
    if (!user) throw new Error('Account not found');
    const hashPassword = await hashPass(password);
    const newPass = await prisma.tenant.update({
      where: { id: userId },
      data: { password: hashPassword },
    });
    return newPass;
  } catch (error) {
    throw error;
  }
};