"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoScroll } from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const ifScroll = window.scrollY;
            setScrolled(ifScroll > 3)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <nav className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? "bg-btnhover" : "bg-transparent"}`}>
            <main className="max-w-7xl mx-auto px-3 py-2 md:px-8 lg:px-10 ">
                <div className="flex justify-between">
                    <Link href={'/'}>
                        <LogoScroll scrolled={scrolled} size="scale-100" />
                    </Link>
                    <Link href={'/register'} className={`flex gap-3 border ${scrolled ? "border-white text-white" : "border-btn text-hitam"}  px-2 py-2 rounded-full font-semibold `}>
                        <p>Daftar</p>
                        <p className="w-[0.1px] h-full bg-gray-300"></p>
                        <p>Masuk</p>
                    </Link>
                </div>
            </main>
        </nav>
    )
}

export default Navbar