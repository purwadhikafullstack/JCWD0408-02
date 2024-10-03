"use client";
import Image from "next/image";
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
      <main className="flex w-full items-center justify-between lg:px-8 py-2 px-2 lg:pr-20">
        <div className="flex justify-center pl-7 lg:-translate-y-2 lg:justify-start">
          <Link href={"/"}>
            <Logo size="scale-150 " colorBird="btn" colorText="hitam" />
          </Link>
        </div>
        <Link
          href={"/profile"}
          className="mt-6 flex items-center justify-between hover:bg-btnhover duration-100 rounded-full bg-btn px-6 py-2 text-white lg:mt-2 lg:min-w-[170px]"
        >
          <div className="flex items-center gap-1 ">
            <Image src={"/dummy/profilDummy.jpg"} alt="avatar" width={200} height={200} className="object-cover h-[30px] w-[30px] rounded-full" />
            <p className="hidden lg:block font-semibold">{username}</p>
          </div>
          <IoMdArrowDropdown />
        </Link>
      </main>
    </nav>
  );
};

export default ReservationNav;
