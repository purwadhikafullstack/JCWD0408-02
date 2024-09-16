"use client";

import { deleteCookie, navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";
import { logoutAction } from "@/Redux/slices/userSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { HiClipboardList } from "react-icons/hi";
import { IoPerson, IoSettingsSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiFileList3Fill, RiLogoutCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface IMenu {
  name: string;
  href: string;
  icon: IconType;
}

const SideBarProfile = () => {
  const { username, avatar, role } = useAppSelector((state) => state.user);
  const Role = role == "user" ? "User" : null;
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
    deleteCookie("token");
    navigate("/");
  };
  const menuItem: IMenu[] = [
    { name: "Akun saya", href: "/profile", icon: IoSettingsSharp },
    { name: "Pesanan saya", href: "/profile/myorder", icon: HiClipboardList },
    {
      name: "Daftar pembelian",
      href: "/profile/purchase",
      icon: RiFileList3Fill,
    },
  ];

  const pathname = usePathname();

  return (
    <section className="sticky top-10 ml-16 hidden h-[500px] w-[300px] rounded-lg border bg-white py-5 shadow-lg lg:block">
      <main className="flex items-center gap-3 border-b px-3 pb-5">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-slate-50 shadow-lg">
          {avatar !== null ? (
            <div>
              <Image
                src={"/herosec.jpg"}
                alt="Profile"
                width={50}
                height={50}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          ) : (
            <div>
              <IoPerson className="h-6 w-6" />
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-hitam">{username}</p>
          <p className="text-xs text-gray-500">{Role}</p>
        </div>
      </main>

      {/* Menu start */}
      <div className="mt-3 flex h-[380px] flex-col justify-between">
        <main className="flex flex-col gap-2">
          {/* Menu list start */}
          {menuItem.map((item) => {
            const isActive = pathname == item.href;
            return (
              <Link
                href={`${item.href}`}
                key={item.name}
                className={`px-5 py-1 ${isActive ? "bg-btn text-white" : "hover:bg-btn/10"}`}
              >
                <main
                  className={`flex items-center gap-3 py-1 ${isActive ? "text-white" : "text-btn"}`}
                >
                  <item.icon className="h-7 w-7" />
                  <p
                    className={`font-medium ${isActive ? "text-white" : "text-hitam"}`}
                  >
                    {item.name}
                  </p>
                </main>
              </Link>
            );
          })}
          {/* Menu list end */}
        </main>

        {/* Log out start */}
        <main className="border-t">
          <Link
            href={"/"}
            className="mt-1 flex cursor-pointer items-center gap-3 px-5 py-2 hover:bg-btn/10"
          >
            <MdHome className="h-7 w-7 text-btn" />
            <p className="font-medium text-hitam">Beranda</p>
          </Link>
          <div
            onClick={onLogout}
            className="flex cursor-pointer items-center gap-3 px-5 py-2 hover:bg-btn/10"
          >
            <RiLogoutCircleLine className="h-7 w-7 text-btn" />
            <p className="font-medium text-hitam">Log Out</p>
          </div>
        </main>
        {/* Log out end */}
      </div>
      {/* Menu end */}
    </section>
  );
};

export default SideBarProfile;
