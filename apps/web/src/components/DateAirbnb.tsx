"use client";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, FocusedInputShape } from "react-dates";
import { useState } from "react";
import moment, { Moment } from "moment";

const CustomDateRangePicker = () => {
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [endDate, setEndDate] = useState<Moment | null>(null);

  const [startDateISO, setStartDateISO] = useState<string | null>(null);
  const [endDateISO, setEndDateISO] = useState<string | null>(null);

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null,
  );

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);

    setStartDateISO(startDate ? startDate.toISOString() : null);
    setEndDateISO(endDate ? endDate.toISOString() : null);
  };

  return (
    <div className="flex flex-col items-center">
      <DateRangePicker
        startDate={startDate}
        startDateId="your_start_date_id"
        endDate={endDate}
        endDateId="your_end_date_id"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        displayFormat="ddd MMM, YYYY"
        numberOfMonths={2}
        showClearDates
        startDatePlaceholderText="Check-in"
        endDatePlaceholderText="Check-out"
        noBorder
        customCloseIcon
        customArrowIcon
      />
    </div>
  );
};

export default CustomDateRangePicker;
