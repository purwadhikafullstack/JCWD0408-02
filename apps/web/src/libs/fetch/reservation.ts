import { IReservation } from "@/types/reservation";
import { getCookie, navigate } from "../server";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../axios";

export const getRoomReservation = async (id: string) => {
  const res = await axiosInstance.get(`/api/rooms/get-roombyid/${id}`);
  return res.data.room;
};

export const createPaymentVA = async (payload: any) => {
  try {
    const { total, startDate, endDate, room_id } = payload;

    const token = await getCookie("token");

    const res = await axios.post(
      `https://lemur-rare-eft.ngrok-free.app/api/reservation/VA/${room_id}`,
      {
        price: total,
        startDate: startDate,
        endDate: endDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.value}`,
        },
      },
    );
    toast.success("Berhasil Membuat Reservasi, Lakukan proses pembayaran");
    navigate(res.data.URL);
  } catch (error: any) {
    typeof error.response?.data?.msg == "string"
      ? toast.error(error.response?.data?.msg)
      : toast.error("error");
  }
};

export const getReservation = async (booking_id?: string) => {
  const token = await getCookie("token");
  const res = await axios.get(
    `http://localhost:8000/api/reservationInfo${booking_id ? `?booking_id=${booking_id}` : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token?.value}`,
      },
    },
  );
  return res.data;
};

export const paymentVA = async (
  data: IReservation,
  room_id: number,
  token: string,
) => {
  try {
    const res = await axios.post(
      `http://localhost:8000/api/reservation/VA/${room_id}`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
    );
    toast.success("Reservation Created");
  } catch (error) {
    toast.error;
  }
};

export const cancelResersvationUser = async (reservation_id: string) => {
  const token = await getCookie("token");
  try {
    const res = await fetch(
      `http://localhost:8000/api/reservation/TF/cancel/${reservation_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.value}`,
        },
      },
    );
    toast.success("reservasi dibatalkan");
  } catch (error) {
    return error;
  }
};

export const getPastReservation = async () => {
  try {
    const token = await getCookie("token");
    const res = await axiosInstance.get(`/api/reservationInfo/past`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token?.value}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export const getDateDisable = async (id: string) => {
  const res = await axiosInstance(`/api/reservationInfo/dates/${id}`);
  return res.data;
};
