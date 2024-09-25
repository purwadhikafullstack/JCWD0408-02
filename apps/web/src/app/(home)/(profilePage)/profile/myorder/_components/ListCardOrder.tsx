"use client";
import { getReservation } from "@/libs/fetch/reservation";
import CardOrder, { ReservationStatus } from "./CardOrder";
import { axiosInstance } from "@/libs/axios";
import { getCookie } from "@/libs/server";
import { Booking, DataResponse } from "@/types/reservation";
import axios from "axios";
import { useEffect, useState } from "react";

const ListCardOrder = () => {
  // const orderData = await getReservation();

  const [orderData, setOrderData] = useState<Booking[]>([]);
  useEffect(() => {
    const orderData = async () => {
      try {
        const res = await getReservation();
        setOrderData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    orderData();
  }, []);

  return (
    <div className="mt-5 w-full rounded-md border bg-slate-50 shadow-lg">
      <div className="grid grid-cols-1 place-items-center px-2 py-2 md:grid-cols-2 md:gap-3 md:px-3 lg:grid-cols-3 lg:gap-4 lg:px-5">
        {orderData.map((item: Booking, idx: number) => (
          <CardOrder
            key={idx}
            location={item.room.property.location}
            name={item.room.type}
            price={item.price}
            reservation_id={item.id}
            status={item.statusRes as ReservationStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCardOrder;
