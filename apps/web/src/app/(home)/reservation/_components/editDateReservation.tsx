"use client";
import { addDays } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { id } from "date-fns/locale";
import { formatDateId } from "@/utils/formatDate";

const DateCompReservation = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    setStartDateOpen(false);
    if (date) {
      setEndDate(addDays(date, 1));
    }
  };

  return (
    <section className="flex flex-col items-center gap-4 relative">
      <div
        onClick={() => setStartDateOpen(!startDateOpen)}
        className="relative border-r-2 border-r-btn pr-3"
      >
        <div className="cursor-pointer text-start text-base">
          <p className="font-semibold text-black">Edit</p>
          <p className="text-xs text-hitam">{formatDateId(startDate)}</p>
        </div>
      </div>
      {startDateOpen && (
        <div className="absolute -left-[80%] top-12 z-10">
          <DatePicker
            onChange={handleDateChange}
            minDate={new Date()}
            locale={id}
            inline
          />
        </div>
      )}

      <div
        onClick={() => setEndDateOpen(!endDateOpen)}
        className={`border-r-2 border-r-btn pr-3`}
      >
        <div className="cursor-pointer text-start text-base">
          <p className="font-semibold text-black">Edit</p>
          <p className="text-xs text-hitam">{formatDateId(endDate)}</p>
        </div>
        {endDateOpen && (
          <div className="absolute right-[11%] top-12 z-10">
            <DatePicker
              onChange={(date) => setEndDate(date)}
              minDate={startDate ? addDays(startDate, 1) : new Date()}
              locale={id}
              inline
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DateCompReservation;
