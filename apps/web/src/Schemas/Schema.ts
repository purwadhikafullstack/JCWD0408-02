import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email tidak valid")
    .required("Mohon masukkan email anda"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email tidak valid")
    .required("Mohon masukkan email anda"),
  password: Yup.string()
    .required("Masukkan password")
    .minLowercase(1, "Password harus mengandung setidaknya 1 huruf kecil")
    .minUppercase(1, "Password harus mengandung setidaknya 1 huruf besar")
    .minNumbers(1, "Password harus mengandung setidaknya 1 angka")
    .min(6, "Password harus minimal 6 karakter"),
});
