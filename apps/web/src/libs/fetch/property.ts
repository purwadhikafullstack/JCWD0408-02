import { getCookie } from "../server";
import { axiosInstance } from "../axios";
import { RoomForm } from "@/types/property";

export const createPropertyfetch = async (formData: FormData) => {
  const token = await getCookie("token");
  console.log(token);

  const res = await axiosInstance.post("/api/property/create", formData, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
};

export const createRoomfetch = async (payload: RoomForm, id: string) => {
  const token = await getCookie("token");
  const res = await axiosInstance.post(
    `/api/property/create-room/${id}`,
    {
      type: payload.type,
      price: parseFloat(payload.price),
      pricediscount: parseFloat(payload.pricediscount),
      capacity: payload.capacity,
      description: payload.description,
      facility: payload.facility,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    },
  );

  return res;
};

export const publishProperty = async (id: string) => {
  const res = await axiosInstance.post(`/api/property/publish/${id}`);
  return res;
};

export const getRoomById = async (id: string) => {
  const res = await axiosInstance.get(`/api/property/get-room/${id}`);
  return res;
};

export const getPropertyByid = async (id: string) => {
  const res = await axiosInstance.get(`/api/property/${id}`);
  return res;
};
