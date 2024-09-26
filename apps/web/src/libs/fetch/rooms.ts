import { axiosInstance } from "../axios";

export const deleteRooms = async (id: string) => {
  const res = await axiosInstance.delete(`/api/rooms/delete/${id}`);
  return res;
};
