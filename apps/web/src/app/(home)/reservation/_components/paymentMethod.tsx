'use client';
import { Dropdown } from 'flowbite-react';
import DropdownPay from './dropdownPay';
import { useState } from 'react';
export default function PaymentMethod() {
  const [drop, setDrop] = useState<Boolean>(false);
  const [payMethod, setPayMethod] = useState<String>('Virtual Account');

  const handleDropdownVA = () => {
    setPayMethod('Virtual Account');
    setDrop(false);
  };
  const handleDropdownTF = () => {
    setPayMethod('Transfer Bank');
    setDrop(false);
  };
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="py-4 ">
      <div className="py-4">
        <h1 className="text-xl font-semibold pb-2">Kebijakan pembatalan</h1>
        <p>
          Pembatalan gratis sebelum 19 Sep. Jika dibatalkan sebelum check-in
          pada tanggal 20 Sep, Anda akan mendapatkan pengembalian uang sebagian.
        </p>
      </div>
      <hr />
      <div className="py-4 flex flex-col ">
        <h1 className="text-xl font-semibold pb-2">Aturan dasar</h1>
        <p>
          Kami meminta setiap tamu untuk mengingat beberapa hal sederhana
          mengenai apa saja yang perlu dilakukan untuk menjadi tamu yang luar
          biasa.
        </p>
        <div className="pl-4 py-2">
          <ul className="list-disc">
            <li>Patuhi peraturan rumah</li>
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
