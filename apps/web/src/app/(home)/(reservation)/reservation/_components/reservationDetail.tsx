"use client";

import PaymentMethod from "./paymentMethod";
import { useState } from "react";
import BookingDate from "./bookingDate";

export default function ReservationDetail() {
  return (
    <div className="lg:w-[35%]">
      <div className="flex items-center gap-2 pb-5">
        <h1 className="text-3xl font-bold">RESERVASI</h1>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-hitam">Pemesanan Anda</h2>

      <div className="flex flex-col justify-between gap-x-6 gap-y-6 pb-4 pt-2">
        <BookingDate />
        <div>
          <p className="py-1 text-xl font-semibold">Tamu</p>
          <p className="text-lg">1 Tamu</p>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h1 className="my-6 py-1 text-xl font-semibold">
          Kebijakan pembatalan
        </h1>
        <p className="text-lg">
          Pembatalan gratis dua hari sebelum waktu Check-in. Jika dibatalkan
          setelah itu maka Anda akan mendapatkan pengembalian uang sebagian.
        </p>
      </div>
      <hr />
      <div className="flex flex-col py-4">
        <h1 className="my-6 pb-2 text-xl font-semibold">Aturan dasar</h1>
        <p className="text-lg">
          Kami meminta setiap tamu untuk mengingat beberapa hal sederhana
          mengenai apa saja yang perlu dilakukan untuk menjadi tamu yang luar
          biasa.
        </p>
        <div className="py-2 pl-4 text-lg">
          <ul className="list-disc">
            <li className="m mb-2">Patuhi peraturan rumah</li>
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
