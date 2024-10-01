import toast from "react-hot-toast";
import { axiosInstance } from "../axios";
import { getCookie } from "../server";

export const postReview = async (reservation_id: string, payload: any) => {
  try {
    const token = await getCookie("token");
    const res = await axiosInstance.post(
      `/api/review/create/${reservation_id}`,
      { content: payload.content, ratings: payload.ratings },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token?.value}`,
        },
      },
    );
    toast.success("Review Dibuat");
    return res;
  } catch (error) {
    return error;
  }
};

export const getReviewByTenant = async () => {
  try {
    const token = await getCookie("token");
    const res = await axiosInstance.get(`/api/review/tenant/`, {
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
