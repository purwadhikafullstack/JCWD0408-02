"use client";

import { Logo, LogoScroll } from "@/components/Logo";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiUserCircle } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
const ReservationNav = () => {
  const { username, token, avatar } = useAppSelector((state) => state.user);
  return (
    <nav className={`w-full border-b-2 bg-white py-4 lg:py-5`}>
      <main className="flex w-full items-center justify-between px-8 py-2 md:px-10 lg:pr-20">
        <div className="flex justify-center lg:-translate-y-2 lg:justify-start pl-7">
          <Link href={"/"}>
            <Logo size="scale-150 " colorBird="btn" colorText="hitam" />
          </Link>
        </div>
        <Link
          href={"/profile"}
          className="mt-6 flex items-center justify-between  rounded-full bg-btn px-6 py-1 text-white lg:mt-2 lg:min-w-[170px]"
        >
          <div className="flex gap-1 items-center">

          <HiUserCircle className="size-[30px]" />
          <p className="font-semibold">{username}</p>
          </div>
          <IoMdArrowDropdown />
        </Link>
      </main>
    </nav>
  );
};

export default ReservationNav;
