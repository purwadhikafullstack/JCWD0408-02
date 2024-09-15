"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DropdownPay from "./dropdownPay";
import { useState } from "react";
export default function PaymentMethod() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  console.log(searchParams.get("checkin"));
  console.log(searchParams.get("checkout"));
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
      <DropdownPay
        drop={drop}
        setDrop={handleDrop}
        payMethod={payMethod}
        paymentVA={handleDropdownVA}
        paymentTF={handleDropdownTF}
      />
      <button className="bg-btn mt-4 px-6 text-xl font-semibold text-white py-4 rounded-xl duration-300 hover:bg-btnhover">Lanjutkan dan Bayar</button>
    </div>
  );
}
