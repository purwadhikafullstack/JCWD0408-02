import Image from "next/image";
import React from "react";

const CardPembelian = () => {
  return (
    <div className="h-[60px] w-[370px] overflow-hidden rounded-lg border bg-slate-50 shadow-md md:w-[340px] lg:w-[250px]">
      <div className="flex h-full items-center gap-3 px-2 py-1">
        <Image
          src={"/dummy/kamar.jpg"}
          alt="Pic"
          width={50}
          height={50}
          className="h-10 w-10 rounded-full object-cover"
        />
        <main className="w-full">
          <div className="flex w-full justify-between">
            <h1 className="w-[90px] truncate text-[10px] font-medium text-hitam">
              D'Valley View Lembang RedPartner
            </h1>
            <h1 className="text-[9px] text-hitam">21 Feb 2024</h1>
          </div>
          <h1 className="text-[8px] text-gray-500">1 Kamar</h1>
        </main>
      </div>
    </div>
  );
};

export default CardPembelian;
