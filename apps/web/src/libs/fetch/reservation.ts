import { IReservation } from "@/types/reservation";

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
