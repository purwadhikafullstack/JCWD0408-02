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
    toast.success("Terimakasih untuk ulasan anda");
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

export const getReviewByReservation = async (review_id: string) => {
  try {
    const res = await axiosInstance.get(`/api/review/reservation/${review_id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getReviewByUser = async () => {
  try {
    const token = await getCookie("token");
    const res = await axiosInstance.get("/api/review/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token?.value}`,
      },
    });
    return res.data
  } catch (error) {
    return error;
  }
};
