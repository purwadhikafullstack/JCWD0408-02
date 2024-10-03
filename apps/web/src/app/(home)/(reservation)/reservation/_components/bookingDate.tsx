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
  const now = Date.now();
  const queryMulai = query.get("checkin");
  const mulai = new Date(queryMulai!) || "pilih tanggal mulai";
  const querySelesai = query.get("checkout");
  const selesai = new Date(querySelesai!) || "pilih tanggal selesai";
  const onChange = (dates: DateRange) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setButtonVissible(true);
  };
  const onClick = () => {
    const query = {
      checkin: startDate,
      checkout: endDate,
    };
    console.log(query.checkin);

    // const query = `?checkin=${startDate}&checkout=${endDate}`;
    router.push(
      `/reservation/${id}?${query.checkin ? `checkin=${query.checkin}` : ``}&${query.checkout ? `checkout=${query.checkout}` : ``}`,
    );
    setButtonVissible(false);
    setDateOpen(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Tanggal Check-in</p>
            <p>{formatDateId(mulai)}</p>
          </div>
          <div>
            <p className="font-semibold">Tanggal Check-out</p>
            <p>{formatDateId(selesai!)}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button
            onClick={() => setDateOpen(!dateOpen)}
            className={`${buttonVisible ? "hidden" : "block"} h-max w-max items-center rounded-lg text-end text-lg font-medium text-gray-500 underline duration-300 hover:text-black`}
          >
            Edit
          </button>
          <button
            onClick={onClick}
            className={`${buttonVisible ? "block" : "hidden"} h-max w-max items-center rounded-lg text-end text-lg font-medium text-gray-500 underline duration-300 hover:text-black`}
          >
           Oke
          </button>
          {dateOpen && (
            <div className="bg-white py-2">
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate!}
                endDate={endDate!}
                selectsRange
                inline
                className=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookingDate;
