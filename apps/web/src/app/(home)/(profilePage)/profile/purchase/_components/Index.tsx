"use client";

import UserGuard from "@/hoc/UserGuard";
import ListCardPembelian from "./ListCardPembelian";

const Purchasepage = () => {
  return (
    <div className="px-5 pb-10 lg:mr-16 lg:px-0">
      <p className="text-2xl font-semibold">Pembelian</p>
      <div className="relative mt-5 border-b-2 px-4 pb-1">
        <p className="font-semibold text-btn">Daftar Pembelian</p>
        <span className="absolute bottom-[-1px] h-[2px] w-[135px] bg-btn"></span>
      </div>
      <ListCardPembelian />
    </div>
  );
};

export default UserGuard(Purchasepage);
