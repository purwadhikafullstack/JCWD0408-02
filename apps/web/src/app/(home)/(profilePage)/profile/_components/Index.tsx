"use client";

import UserGuard from "@/hoc/UserGuard";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import ProfilePreview from "./ProfilePreview";
import { useAppSelector } from "@/Redux/Hooks";
import ButtonComp from "@/components/ButtonComp";
import { BiSolidShieldX } from "react-icons/bi";
import { HiShieldCheck } from "react-icons/hi";

const Profilepage = () => {
  const [isHover, setIsHover] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { username, phone, email, isVerify } = useAppSelector(
    (state) => state.user,
  );
  const [isActiveImage, setIsActiveImage] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setIsActiveImage(!false);
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="px-5 md:mr-16 md:px-0">
      <p className="text-2xl font-semibold">Pengaturan Akun</p>
      <div className="relative mt-5 border-b-2 px-4 pb-1">
        <p className="font-semibold text-btn">Informasi Akun</p>
        <span className="absolute bottom-[-1px] h-[2px] w-[119px] bg-btn"></span>
      </div>

      <section className="mt-5 w-full rounded-md border bg-slate-50 shadow-lg">
        <p className="border-b px-6 py-3 font-semibold">Data Pribadi</p>
        <div className="flex gap-10 px-6 py-3">
          <main className="lg:w-1/6">
            {isActiveImage ? (
              <label
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                htmlFor="profile"
                className="relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border bg-slate-50 shadow-lg lg:h-28 lg:w-28"
              >
                <ProfilePreview image={selectedImage} />
                {isHover && (
                  <div className="absolute top-0 flex h-20 w-20 items-center justify-center rounded-full bg-gray-300/20 transition-opacity duration-300 lg:h-28 lg:w-28">
                    <FiEdit className="h-5 w-5 text-hitam lg:h-8 lg:w-8" />
                    <p className="font-semibold text-hitam">Edit</p>
                  </div>
                )}
                <input
                  id="profile"
                  type="file"
                  name="profile"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            ) : (
              <label
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                htmlFor="profile"
                className="relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border bg-slate-50 shadow-lg lg:h-28 lg:w-28"
              >
                <IoPerson
                  className={`h-14 w-14 text-hitam lg:h-16 lg:w-16 ${isHover ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}
                />

                {isHover && (
                  <div className="absolute top-0 flex h-20 w-20 items-center justify-center rounded-full bg-gray-300/20 transition-opacity duration-300 lg:h-28 lg:w-28">
                    <FiEdit className="h-5 w-5 text-hitam lg:h-8 lg:w-8" />
                    <p className="font-semibold text-hitam">Edit</p>
                  </div>
                )}
                <input
                  id="profile"
                  type="file"
                  name="profile"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </main>

          <div className="flex w-full flex-col gap-5">
            <main className="flex w-full flex-col">
              <label
                htmlFor="username"
                className="mb-1 font-medium text-gray-500"
              >
                Nama lengkap
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                defaultValue={username}
                className="w-full rounded-md px-3 py-1 outline-none outline-1 outline-gray-400 focus:outline-2 focus:outline-btn/50"
              />
            </main>
            <main className="flex w-full flex-col">
              <label htmlFor="phone" className="mb-1 font-medium text-gray-500">
                Nomor Telephone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="No. telephone"
                defaultValue={phone}
                className="w-full rounded-md px-3 py-1 outline-none outline-1 outline-gray-400 focus:outline-2 focus:outline-btn/50"
              />
            </main>
            <div className="flex w-full justify-end">
              <div>
                <ButtonComp text="Simpan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 w-full rounded-md border bg-slate-50 shadow-lg">
        <main className="flex justify-between border-b px-6 py-3">
          <p className="font-semibold text-hitam">Email Anda</p>
          <button
            onClick={() => setIsActiveEmail(!isActiveEmail)}
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 font-semibold text-hitam hover:bg-btn/10"
          >
            <FiEdit />
            <p>Ganti email</p>
          </button>
        </main>

        {isActiveEmail ? (
          <div className="px-6 py-3">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              className="w-full rounded-md px-3 py-1 outline-none outline-1 outline-gray-400 focus:outline-2 focus:outline-btn/50"
            />
          </div>
        ) : (
          <main className="px-6 py-3">
            <div className="flex gap-2 border-b pb-3 text-gray-600">
              <p>{email}</p>
              <div
                className={`flex items-center gap-1 ${isVerify == true ? "text-green-500" : "text-red-500"} `}
              >
                <p>{isVerify == true ? "Verifikasi" : "Belum Verifikasi"}</p>
                {isVerify == true ? (
                  <HiShieldCheck className="h-5 w-5" />
                ) : (
                  <BiSolidShieldX className="h-5 w-5" />
                )}
              </div>
            </div>
          </main>
        )}

        <div className="flex justify-end">
          <div className="w-fit px-6 pb-3">
            <ButtonComp text="Simpan" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserGuard(Profilepage);
