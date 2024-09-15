"use client";
import { Logo } from "@/components/Logo";
import { formatDateReservation } from "@/utils/formatDate";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PriceDetail() {
  const searchParams = useSearchParams();
  const awal = searchParams.get("checkin");
  const startDate = new Date(searchParams.get("checkin")!);
  const endDate = new Date(searchParams.get("checkout")!);
  const checkin = formatDateReservation(startDate!);
  const checkout = formatDateReservation(endDate!);

  return (
    <div className="flex h-max w-full flex-col gap-4 border-b-2 border-btn bg-white px-6 py-5 text-hitam lg:sticky lg:top-8 lg:w-[30%] lg:rounded-xl lg:border-2">
      <div className="flex flex-col justify-start gap-2 lg:flex-row lg:items-center">
        <Image
          src={"/dummy/kamar.jpg"}
          width={500}
          height={30}
          alt="kamar"
          className="w-40 rounded-xl"
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Minty Sunday Hotel</h1>
          <h2 className="text-sm text-btn">Kurapika Tenant</h2>
          <h2 className="text-sm font-semibold">Bandung</h2>
        </div>
      </div>
      <hr className="text-abu" />
      <div>
        <p className="">{`${checkin} - ${checkout}`}</p>
        <p className="text-sm">2 Malam • 1 Kamar</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Tipe Kamar</p>
        <p className="text-sm">Standard Room</p>
      </div>
      <hr className="text-abu" />
      <h2 className="font-semibold">Perincian Harga</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-8 gap-y-2">
        <p>IDR 329.789,00 </p>
        <p className="pr-5 text-end">x 2 malam</p>
        <p className="font-semibold">TOTAL(IDR)</p>
        <p className="pr-5 text-end">IDR 994.000</p>
      </div>
    </div>
  );
}
