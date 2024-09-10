"use client";
import DateComp from "@/components/DateComp";
import PaymentMethod from "./paymentMethod";
import { useState } from "react";

export default function ReservationDetail() {
  const [dateState, setDateState] = useState<boolean>(false);

  return (
    <div className="lg:w-[35%]">
      <div className="flex items-center gap-2 pb-5">
        <h1 className="text-3xl font-bold">RESERVASI</h1>
      </div>
      <h2 className="text-2xl font-bold text-hitam">Pemesanan Anda</h2>
      <div className="grid grid-cols-2 justify-between gap-x-6 gap-y-4 pb-4 pt-2">
        <div>
          <p className="py-1 text-xl font-semibold">Tanggal</p>
          <p className="text-lg">26–27 Sep</p>
        </div>
        <button
          onClick={() => setDateState(!dateState)}
          className="text-end font-medium underline underline-offset-4"
        >
          Edit
        </button>

        <div>
          <p className="py-1 text-xl font-semibold">Tamu</p>
          <p className="text-lg">1 Tamu</p>
        </div>
      </div>
      <hr />
      <PaymentMethod />
      <hr />
    </div>
  );
}
