import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export default function Info() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-2 rounded-xl px-2 py-2 justify-self-center lg:px-4  w-full">
      <p className="text-sm font-semibold text-gray-500">
        Booking ID : 0231-321321-31313-313
      </p>
      <h1 className="text-3xl font-bold">Menunggu konfirmasi </h1>
      <p>Reservasi anda sedang di review oleh Tenant</p>
      <div className="mt-2 flex gap-4">
        <Link href={"/"} className="rounded-full bg-btn px-4 hover:bg-btnhover py-1 text-white duration-300">
          Home
        </Link>
        <Link
          href={"/profile/myorder"}
          className="rounded-full  border-2 px-4 py-1 hover:bg-btn hover:text-white duration-300"
        >
          Detail Reservasi
        </Link>
      </div>
    </div>
  );
}
