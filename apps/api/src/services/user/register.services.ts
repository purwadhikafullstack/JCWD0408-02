import { User } from '@prisma/client';
import { checkExistingAccount } from '../checkExistingAccount';
import prisma from '@/prisma';
import { transporter } from '@/helper/nodemailer';
import { generateOtp } from '@/helper/generateOtp';

const sendVerifikationMailUser = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verifikasi email',
    text: `Kode OTP Anda adalah ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

export const registerServicesUser = async (body: User) => {
  try {
    const { email } = body;
    await checkExistingAccount(email);

    const otp = generateOtp();
    const otpExpired = new Date();
    otpExpired.setMinutes(otpExpired.getMinutes() + 5);
    const createUser = await prisma.user.create({
      data: { email, otp, otpExpired },
    });

    await sendVerifikationMailUser(email, otp);

    return createUser;
  } catch (error) {
    throw error;
  }
};
