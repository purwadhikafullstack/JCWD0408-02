"use client";

import UserGuard from "@/hoc/UserGuard";
import ListCardOrder from "./ListCardOrder";

const MyOrderpage = () => {
  return (
    <div className="px-5 lg:px-0 lg:mr-16 pb-10">
      <p className="text-2xl font-semibold">Pesanan saya</p>
      <div className="relative mt-5 border-b-2 px-4 pb-1">
        <p className="font-semibold text-btn">List order</p>
        <span className="absolute bottom-[-1px] h-[2px] w-[80px] bg-btn"></span>
      </div>
      <ListCardOrder />
    </div>
  );
};

export default UserGuard(MyOrderpage);
