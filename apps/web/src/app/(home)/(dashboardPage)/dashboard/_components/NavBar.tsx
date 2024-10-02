"use client";

import { useAppSelector } from "@/Redux/Hooks";
import { formatDateCreateAccount } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCreateOutline, IoPerson } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const NavBar = () => {
  const { username, avatar, createdAt } = useAppSelector((state) => state.user);
  console.log(avatar);
  
  // const createAccount = formatDateCreateAccount(createdAt);
  const pathname = usePathname();
  const menuNav = [
    {
      href: "/dashboard/create-property",
      text: "Buat Properti",
      icon: IoCreateOutline,
    },
    {
      href: "/dashboard/notifikasi",
      text: "Notifikasi",
      icon: MdOutlineTextsms,
    },
  ];
  return (
    <nav className="py-8">
      <section className="flex items-center justify-between border-b pb-3">
        <main className="hidden text-xl font-bold text-hitam md:block">
          <h1>Dashboard</h1>
          {/* <p className="text-xs font-normal text-gray-500">{createAccount}</p> */}
        </main>
        <main className="flex items-center gap-4">
          {menuNav.map((item) => {
            const isActive = pathname == item.href;
            return (
              <Link
                href={`${item.href}`}
                className={`flex items-center gap-2 rounded-full p-2 text-xs font-medium md:text-sm ${isActive ? "bg-btn text-white" : "bg-btn/10 text-hitam transition-all duration-300 hover:bg-btn/30"} `}
              >
                <item.icon className="h-3 w-3 md:h-4 md:w-4" />
                <p>{item.text}</p>
              </Link>
            );
          })}
          <div className="hidden items-center gap-2 lg:flex">
            {avatar !== null ? (
              <div className="overflow-hidden rounded-full bg-slate-50 shadow-lg">
                <Image
                  src={avatar}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="h-9 w-9 rounded-full"
                />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 shadow-lg">
                <IoPerson className="h-4 w-4" />
              </div>
            )}
            <p className="font-medium text-hitam">{username}</p>
          </div>
        </main>
      </section>
    </nav>
  );
};

export default NavBar;
