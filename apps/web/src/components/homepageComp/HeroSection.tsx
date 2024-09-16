import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import DateComp from "../DateComp";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        src={"/herosec.jpg"}
        alt="Hero"
        width={1000}
        height={600}
        className="h-[500px] w-screen object-cover object-bottom"
      />

      {/* Searching bar start */}
      <main className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-white">
          CARI TEMPAT ISTIRAHAT TERNYAMANMU
        </p>

        <div className="flex h-14 w-[850px] items-center rounded-full bg-white px-1 py-1 shadow-lg drop-shadow-[1px_3px_4px_teal]">
          <main className="flex h-full w-full items-center justify-between">
            <section>
              <input
                type="text"
                placeholder="Masukkan lokasi"
                className="pl-5 text-lg focus:outline-none"
              />
            </section>

            <section>
              <DateComp />
            </section>
            {/* Search start */}
            <button
              type="submit"
              className="flex h-full items-center gap-2 rounded-full bg-btn px-2 font-semibold text-white"
            >
              <IoIosSearch className="h-5 w-5" />
              <p>Cari</p>
            </button>
            {/* Search end */}
          </main>
        </div>
      </main>
      {/* Searching bar end */}
    </section>
  );
};

export default HeroSection;
