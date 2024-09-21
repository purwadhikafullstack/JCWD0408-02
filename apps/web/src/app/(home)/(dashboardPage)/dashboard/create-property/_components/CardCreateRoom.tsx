import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { MdMergeType } from "react-icons/md";

const CardCreateRoom = () => {
  return (
    <div className="flex h-[60px] w-full items-center gap-16 rounded-lg border bg-slate-50 px-3 py-3 shadow-md">
      <section className="flex items-center gap-5">
        <Image
          src={"/dummy/kamar.jpg"}
          alt="Preview"
          width={100}
          height={100}
          className="h-full w-16 rounded-md object-cover"
        />
        <main>
          <div className="flex gap-1 text-sm font-medium text-hitam">
            <p>Type Room</p>
            <p className="text-gray-500">Deluxe</p>
          </div>
          <div className="flex gap-1 text-sm font-medium text-hitam">
            <p>Kapasitas Room</p>
            <p className="text-gray-500">1</p>
          </div>
        </main>
      </section>

      <section>
        <div className="flex gap-1 text-sm font-medium text-hitam">
          <p>Normal Price</p>
          <p className="text-gray-500">Rp1.203.213</p>
        </div>
        <div className="flex gap-1 text-sm font-medium text-hitam">
          <p>Discount Price</p>
          <p className="text-gray-500">Rp1.099.213</p>
        </div>
      </section>

      <section>
        <div className="flex gap-1 text-sm font-medium text-hitam">
          <p>Fasilitas room</p>
          <p className="text-gray-500">Wifi</p>
        </div>
      </section>
    </div>
  );
};

export default CardCreateRoom;
