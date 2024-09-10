import { FormDataInput, UserType } from "@/types/user";
import { axiosInstance } from "../axios";
import { getCookie } from "../server";

export const registerAxiosTenant = async (payload: UserType) => {
  const res = await axiosInstance.post(
    "/api/tenant/register",
    {
      email: payload.email,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return res;
};

export const verifyOtpTenant = async (payload: UserType) => {
  const token = await getCookie("token");
  const res = await axiosInstance.post(
    "/api/tenant/verify-otp",
    {
      otp: payload.otp,
    },
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  );

  return res;
};

export const updateDataTenant = async (payload: FormDataInput) => {
  const token = await getCookie("token");
  const res = await axiosInstance.post(
    "/api/tenant/update-data",
    {
      username: payload.username,
      phone: payload.phone,
      password: payload.password,
    },
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  );
  return res;
};
