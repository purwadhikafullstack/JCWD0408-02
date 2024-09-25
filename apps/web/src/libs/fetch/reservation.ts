import { IReservation } from "@/types/reservation";
import { getCookie } from "../server";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../axios";
import { method } from "cypress/types/bluebird";

export const createReservationVA = async (
  data: IReservation,
  token: string,
) => {
  const res = await fetch(
    "https://lemur-rare-eft.ngrok-free.app/api/reservation/VA",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  return res.json();
};
export const getReservation = async () => {
  const token = await getCookie("token");

  const res = await axios.get(`http://localhost:8000/api/reservationInfo`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token?.value}`,
    },
  });
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
    // navigate(res.data)
  } catch (error) {
    toast.error;
    console.log(error);
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
    console.log(error);
  }
};

// export const cancelResersvationUser = async (
//   reservation_id: string,
// ) => {
//   try {
//     const token = await getCookie("token");
//     console.log(token);

//     const res = await axios.patch(
//       `http://localhost:8000/api/reservation/TF/cancel/${reservation_id}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token?.value}`,
//           // Authorization: `${token}`,
//         },
//       },
//     );
//     toast.success("reservasi dibatalkan");
//   } catch (error) {
//     console.log(error);
//   }
// };
