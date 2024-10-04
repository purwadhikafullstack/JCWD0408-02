import { navigate } from "@/libs/server";
import { IReservationById } from "@/types/getReservationId";
import { formatDateReservation } from "@/utils/formatDate";
import { idID } from "@mui/material/locale";
import Image from "next/image";
import React from "react";
interface IProps {
  id: string;
  startDate: string;
  endDate: string;
  property: string;
  location: string;
}
const CardPembelian = ({
  id,
  startDate,
  endDate,
  location,
  property,
}: IProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-slate-50 lg:shadow-md">
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="lg:flex-row flex-col flex lg:items-center justify-between">
          <h1 className="text-xs lg:text-sm text-gray-500">ID: {id}</h1>
          <h1 className="text-xs text-hitam">
            {formatDateReservation(new Date(startDate))} -{" "}
            {formatDateReservation(new Date(endDate))}
          </h1>
        </div>
        <main className="w-full">
          <div className="flex w-full justify-between">
            <h1 className="truncate font-medium text-hitam">{property}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">{location}</h1>
            <button
              onClick={() => {
                navigate(`/profile/myorder/${id}`);
              }}
              className="border-b duration-150 hover:border-b-black"
            >
              Detail
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardPembelian;
