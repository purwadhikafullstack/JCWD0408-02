"use client";
import { navigate } from "@/libs/server";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
export type ReservationStatus = "PENDING" | "CONFIRMATION" | "PAID" | "CANCEL";
interface IOrderlist {
  location: String;
  name: String;
  price: number;
  reservation_id: string;
  status: ReservationStatus;
}

const CardOrder = ({
  location,
  name,
  price,
  reservation_id,
  status,
}: IOrderlist) => {
  const reservasi = {
    PENDING: "Menunggu Pembayaran",
    CONFIRMATION: "Menunggu Konfirmasi",
    PAID: "Terkonfirmasi",
    CANCEL: "Dibatalkan",
  };

  const statusMessage = reservasi[status] || "status tidak diketahui";

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-slate-50 px-2 py-2 shadow-md">
      <p className="pt-2 font-bold">Booking Id: </p>
      <p className="pb-2 text-sm font-bold text-btn">{reservation_id}</p>
      <Image
        src={"/dummy/kamar.jpg"}
        alt="Order image"
        width={500}
        height={100}
        className="h-[140px] w-full rounded-lg object-cover md:h-[180px]"
      />
      <section className="h-full px-3 py-2">
        <main className="flex items-center justify-between gap-6 text-sm md:text-base">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-btn" />
            <p className="font-medium text-hitam">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoStar className="text-yellow-500" />
            <p className="font-medium text-hitam">4.5</p>
          </div>
          <p
            className={`self-end border-b-2  ${status == "PENDING" ? "bg-yellow-400/70" : status == "PAID" ? "border-green-500/70" : status == "CONFIRMATION" ? "border-yellow-400/70":  "rounded-md bg-red-600/70"} px-2 text-end text-[12px] font-semibold`}
          >
            {statusMessage}
          </p>
        </main>
        <main className="my-4 h-[60px] text-sm md:text-base">
          <p className="line-clamp-2 font-semibold text-hitam">{name}</p>
          <h3 className="text-xs text-gray-500 md:text-sm">1 Kamar</h3>
        </main>

        <div className="flex items-center justify-between text-sm md:text-base">
          <h3 className="font-medium text-hitam">Rp {price}</h3>
          <div>
            <button
              onClick={() => navigate(`/reservation-detail/${reservation_id}`)}
              className="rounded-md bg-btn px-2 py-2 text-white duration-300 hover:bg-btnhover"
            >
              Booking Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardOrder;
