import { getCookie } from "../server";

export const getListTransaction = async (query?: string) => {
  try {
    const token = await getCookie("token");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/reservationInfo/list${query ? `?status=${query}` : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.value}`,
        },
      },
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
