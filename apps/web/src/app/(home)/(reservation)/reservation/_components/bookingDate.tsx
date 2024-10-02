"use client";
import { formatDateId } from "@/utils/formatDate";
import { useRouter, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateRange = [Date | null, Date | null];
const BookingDate: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [buttonVisible, setButtonVissible] = useState<boolean>(false);
  const [dateOpen, setDateOpen] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const query = useSearchParams();
  const queryMulai = query.get("checkin");
  const mulai = new Date(queryMulai!) || "pilih tanggal mulai";
  const querySelesai = query.get("checkout");
  const selesai = new Date(querySelesai!) || "pilih tanggal selesai";

  const onChange: any = (dates: DateRange) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setButtonVissible(true);
  };
  const onClick: any = () => {
    const query = `?checkin=${startDate}&checkout=${endDate}`;
    router.push(`/reservation/${id}${query}`);
    setButtonVissible(false);
    setDateOpen(false);
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <p className=" font-semibold">Tanggal Check-in</p>
          <p>{formatDateId(mulai)}</p>
        </div>
        <div>
          <p className=" font-semibold">Tanggal Check-out</p>
          <p>{formatDateId(selesai!)}</p>
        </div>
        <button
          onClick={() => setDateOpen(!dateOpen)}
          className={`${buttonVisible ? "hidden" : "block"} inline-flex w-full items-center rounded-lg border-2 border-btn px-5 py-2.5 text-center text-lg font-medium text-btn duration-300 hover:bg-btn hover:text-white`}
        >
          Edit Tanggal Pemesanan
        </button>
        <button
          onClick={onClick}
          className={`${buttonVisible ? "block" : "hidden"} inline-flex w-full items-center rounded-lg border-2 border-btn bg-btn px-5 py-2.5 text-center text-lg font-medium text-white duration-300 hover:bg-white hover:text-btn`}
        >
          OKE
        </button>
      </div>
      {dateOpen && (
        <div className="flex bg-white py-2">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate!}
            endDate={endDate!}
            selectsRange
            inline
            className="bg-white"
          />
        </div>
      )}
    </div>
  );
};
export default BookingDate;
