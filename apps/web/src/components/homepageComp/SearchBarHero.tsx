"use client";

import React, { useState } from "react";
import DateComp from "../DateComp";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const SearchBarHero = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?location=${location}`);
  };
  return (
    <main className="absolute left-1/2 top-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-center md:flex">
      <p className="font-semibold text-white md:text-3xl">
        CARI TEMPAT ISTIRAHAT TERNYAMANMU
      </p>

      <div className="flex h-14 items-center rounded-full bg-white px-1 py-1 shadow-lg">
        <main className="flex h-full w-full items-center justify-between gap-4">
          <section>
            <input
              type="text"
              placeholder="Masukkan lokasi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-5 text-lg focus:outline-none"
            />
          </section>

          <section>
            <DateComp />
          </section>
          {/* Search start */}
          <button
            onClick={handleSearch}
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
  );
};

export default SearchBarHero;
