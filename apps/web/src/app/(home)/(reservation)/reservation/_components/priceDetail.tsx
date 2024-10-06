"use client";

import { formatRupiah } from "@/utils/formataRupiah";
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
  const hargaKamar = formatRupiah(price as number);
  const nights = Math.round((endDate - startDate) / millisecondsPerNight);
  const priceNight = (price as number) * nights;
  const pajak = (priceNight as number) * 0.15;
  const total = priceNight + pajak;
  return (
    <div className="flex h-max w-full flex-col gap-4 border-b-2 bg-white py-5 text-hitam lg:sticky lg:top-8 lg:w-[25%] lg:rounded-xl lg:border-b-0 lg:px-6 lg:shadow-md">
      <div className="flex flex-col justify-start gap-2">
        <Image
          src={"/dummy/kamar.jpg"}
          width={500}
          height={30}
          alt="kamar"
          className="rounded-xl object-cover lg:h-[150px]"
          priority
        />
        <div className="flex flex-col">
          <h1 className="text- font-bold">
            {propertyName} - {location}
          </h1>
          <h2 className="text-sm font-semibold text-btn">
            <span className="text-black">by : </span> {tenantName}
          </h2>
          {/* <h2 className="text-sm font-semibold">{location}</h2> */}
        </div>
      </div>
      <hr className="text-abu" />
      <div className="w-full">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="font-semibold">Check-in</td>
              <td className="text-end font-semibold">Check-out</td>
            </tr>
            <tr>
              <td className="text-sm">{`${checkin}`}</td>
              <td className="text-end text-sm">{`${checkout}`}</td>
            </tr>
          </tbody>
        </table>
        {/* <p className="">{`${checkin} - ${checkout}`}</p> */}
        <p className="text-sm font-semibold">{nights} Malam • 1 Kamar</p>
      </div>
      {/* <div className="flex flex-col">
        <p className="">Tipe Kamar</p>
        <p className="text-sm font-bold">{roomType}</p>
      </div> */}
      <hr className="text-abu" />
      <h2 className="font-semibold">Perincian Harga</h2>
      <table>
        <tbody>
          <tr>
            <td>Harga Kamar</td>
            <td className="text-end"> {hargaKamar}</td>
          </tr>
          <tr className="text-[13px] text-gray-500">
            <td>{nights} malam</td>
            <td className="text-end">
              {nights} x {hargaKamar}
            </td>
          </tr>
          <tr>
            <td>Pajak 15%</td>
            <td className="text-end"> {formatRupiah(pajak)}</td>
          </tr>
          <tr>
            <td className="">Total</td>
            <td className="text-end font-semibold">{` ${formatRupiah(total)}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
