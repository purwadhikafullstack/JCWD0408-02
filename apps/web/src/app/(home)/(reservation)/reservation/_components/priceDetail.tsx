"use client";
import { Logo } from "@/components/Logo";
import { formatDateReservation } from "@/utils/formatDate";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface IReservation {
  roomType: String;
  location: String;
  propertyName: String;
  tenantName: String;
  price: Number;
}
export default function PriceDetail({
  roomType,
  location,
  propertyName,
  tenantName,
  price,
}: IReservation) {
  const searchParams = useSearchParams();
  const startDate: any = new Date(searchParams.get("checkin")!);
  const endDate: any = new Date(searchParams.get("checkout")!);
  const checkin = formatDateReservation(startDate!);
  const checkout = formatDateReservation(endDate!);
  const millisecondsPerNight = 24 * 60 * 60 * 1000;
  const nights = Math.round((endDate - startDate) / millisecondsPerNight);
  console.log(nights);

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
          <h1 className="text-xl font-bold">{propertyName}</h1>
          <h2 className=" font-semibold text-btn">{tenantName}</h2>
          <h2 className="text-sm font-semibold">{location}</h2>
        </div>
      </div>
      <hr className="text-abu" />
      <div>
        <p className="">{`${checkin} - ${checkout}`}</p>
        <p className="text-sm">{nights} Malam • 1 Kamar</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Tipe Kamar</p>
        <p className="text-sm">{roomType}</p>
      </div>
      <hr className="text-abu" />
      <h2 className="font-semibold">Perincian Harga</h2>
      <div className="grid grid-cols-2 gap-2 gap-x-8 gap-y-2">
        <p>IDR {String(price)} </p>
        <p className="pr-5 text-end">x 2 malam</p>
        <p className="font-semibold">TOTAL(IDR)</p>
        <p className="pr-5 text-end">IDR 600000</p>
      </div>
    </div>
  );
}
