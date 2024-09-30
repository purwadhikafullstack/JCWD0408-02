import Image from "next/image";
import ReservationDetailBody from "./detail";
import SummaryPayment from "./summary";

export default function MyReservationDetail() {
  return (
    <div className="rounded-xl bg-white p-4">
      <h1 className="mb-4 text-2xl font-bold">Detail Pemesanan</h1>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <Image
            src={"/dummy/room.jpg"}
            width={350}
            height={300}
            alt="property image"
            className="rounded-lg"
          />
          <button className="rounded-lg bg-btn px-4 py-3 font-semibold text-white shadow-md duration-300 hover:bg-white hover:text-btn">
            Lihat Detai Property
          </button>
        </div>
        <ReservationDetailBody />
        <SummaryPayment />
      </div>
      <div>
        <h2 className="mt-5 text-2xl"> Berikan Review</h2>
      </div>
    </div>
  );
}
