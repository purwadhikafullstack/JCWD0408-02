"use client";

import { Logo, LogoScroll } from "@/components/Logo";
import Link from "next/link";
import { HiUserCircle } from "react-icons/hi2";

const ReservationNav = () => {
  return (
    <nav className={`w-full border-b-2 bg-white py-4 lg:py-5`}>
      <main className="flex w-full items-center justify-between px-8 py-2 md:px-10 lg:pr-20">
        <div className="flex justify-center lg:justify-start">
          <Link href={"/"}>
            <Logo size="scale-150 " colorBird="btn" colorText="hitam" />
          </Link>
        </div>
        <div className="rounded-full bg-btn px-4 py-2 text-white flex items-center justify-around gap-2 lg:min-w-[100px]">
        <HiUserCircle className="size-[20px]"/>
          <p className="font-semibold">User Jovinda</p>
        </div>
      </main>
    </nav>
  );
};

export default ReservationNav;
