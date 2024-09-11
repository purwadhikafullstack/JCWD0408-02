"use client";
import DateComp from "@/components/DateComp";
import PaymentMethod from "./paymentMethod";
import { useState } from "react";
import DateCompReservation from "./editDateReservation";

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
          <p className="text-lg font-semibold">Check In</p>
          <p className="">27 Sept</p>
          <p className="text-lg font-semibold">Check Out</p>
          <p className="">28 Sept</p>
        </div>
        <div>
          <DateCompReservation />
        </div>
        <div>
          <p className="py-1 text-xl font-semibold">Tamu</p>
          <p className="text-lg">1 Tamu</p>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h1 className="py-1 text-xl font-semibold">Kebijakan pembatalan</h1>
        <p className="text-lg">
          Pembatalan gratis sebelum 19 Sep. Jika dibatalkan sebelum check-in
          pada tanggal 20 Sep, Anda akan mendapatkan pengembalian uang sebagian.
        </p>
      </div>
      <hr />
      <div className="flex flex-col py-4">
        <h1 className="pb-2 text-xl font-semibold">Aturan dasar</h1>
        <p className="text-lg">
          Kami meminta setiap tamu untuk mengingat beberapa hal sederhana
          mengenai apa saja yang perlu dilakukan untuk menjadi tamu yang luar
          biasa.
        </p>
        <div className="py-2 pl-4 text-lg">
          <ul className="list-disc">
            <li className="mb-2">Patuhi peraturan rumah</li>
            <li>
              Perlakukan rumah milik Tuan Rumah Anda seperti rumah Anda sendiri
            </li>
          </ul>
        </div>
      </div>
      <PaymentMethod />
      <hr />
    </div>
  );
}
