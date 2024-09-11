"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoScroll } from "./Logo";
import { useAppSelector } from "@/Redux/Hooks";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/Redux/slices/userSlice";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { username, token } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const ifScroll = window.scrollY;
      setScrolled(ifScroll > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed z-10 w-full transition-colors duration-300 ${scrolled ? "bg-btnhover" : "bg-transparent"}`}
    >
      <main className="mx-auto max-w-7xl px-3 py-2 md:px-8 lg:px-10">
        <div className="flex justify-between">
          <Link href={"/"}>
            <LogoScroll scrolled={scrolled} size="scale-100" />
          </Link>

          {token ? (
            <div>
              <Link href={"/profile"}>{username}</Link>
              <h3 onClick={() => dispatch(logoutAction())}>Logout</h3>
            </div>
          ) : (
            <div
              className={`flex gap-3 border-2 ${scrolled ? "border-white text-white" : "border-btn text-white"} rounded-full px-2 py-2 font-semibold`}
            >
              <Link
                href={"/account/register"}
                className="text-white transition-colors duration-150 hover:text-gray-300"
              >
                Daftar
              </Link>

              {/* Style line start */}
              <p
                className={`h-full w-[1px] ${scrolled ? "bg-white" : "bg-btn"} `}
              ></p>
              {/* Style line end */}

              <Link
                href={"/account/login"}
                className="text-white transition-colors duration-150 hover:text-gray-300"
              >
                Masuk
              </Link>
            </div>
          )}
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
