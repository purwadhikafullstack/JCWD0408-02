"use client";
import { getReservation } from "@/libs/fetch/reservation";
import CardOrder, { ReservationStatus } from "./CardOrder";
import { axiosInstance } from "@/libs/axios";
import { getCookie } from "@/libs/server";
import { Booking, DataResponse } from "@/types/reservation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const ListCardOrder = () => {
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
  const formik = useFormik({
    initialValues: {
      booking_id: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await getReservation(values.booking_id);
        setOrderData(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="mt-5 w-full rounded-md border bg-slate-50 shadow-lg lg:items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-2 px-6 pb-2 pt-4"
      >
        <label htmlFor="booking_id" className="font-bold">
          Cari Id Booking
        </label>
        <div className="flex gap-2">
          <input
            name="booking_id"
            onChange={formik.handleChange}
            value={formik.values.booking_id}
            type="text"
            placeholder="ID BOOKING"
            className="lg:min-w-[370px] text-sm rounded-md border-2 px-2 font-light"
          />
          <button type="submit" className="rounded-md bg-btn px-2 text-white">
            Cari
          </button>
        </div>
      </form>
      <div className="grid gap-2 grid-cols-1 place-items-center px-2 py-2 md:grid-cols-2 md:gap-3 md:px-3 lg:grid-cols-3 lg:gap-4 lg:px-5">
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
