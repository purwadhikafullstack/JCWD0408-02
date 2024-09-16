import React from "react";
import CardPembelian from "./CardPembelian";
import ButtonComp from "@/components/ButtonComp";

const ListCardPembelian = () => {
  return (
    <div className="mt-5 w-full rounded-md border bg-slate-50 shadow-lg">
      <div className="w-fit px-3 pt-5">
        <ButtonComp text="90 Hari Terakhir" />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-5 px-3 py-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
        <CardPembelian />
        <CardPembelian />
        <CardPembelian />
        <CardPembelian />
        <CardPembelian />
      </div>
    </div>
  );
};

export default ListCardPembelian;
