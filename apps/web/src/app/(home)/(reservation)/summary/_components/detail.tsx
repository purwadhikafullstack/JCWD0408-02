"use client";
import { useAppSelector } from "@/Redux/Hooks";
import DetailProps from "./detailProps";
import Room from "./room";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "next/navigation";

export default function Detail() {
  const { username, phone, email } = useAppSelector((state) => state.user);
  const params = useParams();
  const bookingId = params.reservation_id as string;
  return (
    <div className="rounded-xl bg-white p-4 shadow-md w-[100%]">
      <Room />
      {/* Status Konfirmasi */}
      <div className="my-2 flex flex-col items-center gap-2 rounded-xl bg-promo/25 p-2 lg:min-h-[100px] lg:flex-row">
        <div className="flex min-h-[50px] items-center justify-center rounded-xl bg-white px-4 lg:min-w-[80px]">
          <RxCross1 className="text-promo" />
        </div>
        <div className="flex w-[100%] flex-col">
          <p className="text-center font-semibold lg:text-start">
            Menunggu konfirmasi dari Tenant
          </p>
          <p className="text-center text-sm lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            maiores.
          </p>
        </div>
      </div>
      {/* Status Konfirmasi */}

      <div className="flex flex-col gap-4 px-2">
        <h1 className="text-lg font-bold">Detail Booking</h1>
        <div className="grid grid-cols-3 gap-y-10">
          <DetailProps detail="GUEST" content={username} />
          <DetailProps detail="CHECK-IN" content="Sun,22 May" />
          <DetailProps detail="CHEC-OUT" content="Wed,24 May" />
          <DetailProps detail="YOUR RESERVATION" content="2-night, 2-person" />
          <DetailProps detail="PHONE" content={`+62-${phone}`} />
          <DetailProps detail="EMAIL" content={email} />
          <DetailProps detail="BOOKING-ID" content={bookingId} />
        </div>
      </div>
    </div>
  );
}
