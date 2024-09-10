"use client";
import DropdownPay from "./dropdownPay";
import { useState } from "react";
export default function PaymentMethod() {
  const [drop, setDrop] = useState<boolean>(false);
  const [payMethod, setPayMethod] = useState<string>("Virtual Account");

  const handleDropdownVA = () => {
    setPayMethod("Virtual Account");
    setDrop(false);
  };
  const handleDropdownTF = () => {
    setPayMethod("Transfer Bank");
    setDrop(false);
  };
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="py-4">
      <div className="py-4">
        <h1 className="py-1 font-semibold text-xl">Kebijakan pembatalan</h1>
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
          <ul className="list-disc ">
            <li className="mb-2">Patuhi peraturan rumah</li>
            <li>
              Perlakukan rumah milik Tuan Rumah Anda seperti rumah Anda sendiri
            </li>
          </ul>
        </div>
      </div>
      <DropdownPay
        drop={drop}
        setDrop={handleDrop}
        payMethod={payMethod}
        paymentVA={handleDropdownVA}
        paymentTF={handleDropdownTF}
      />
    </div>
  );
}
