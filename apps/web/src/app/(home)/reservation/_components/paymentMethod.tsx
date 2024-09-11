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
