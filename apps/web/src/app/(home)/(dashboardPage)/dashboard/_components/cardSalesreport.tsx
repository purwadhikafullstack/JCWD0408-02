"use client";
// import Calendar from "react-awesome-calendar";
const Calendar = dynamic(() => import('react-awesome-calendar'), { ssr: false });
import React, { useEffect, useState } from "react";
import { getReportCalendar } from "@/libs/fetch/report";
import dynamic from "next/dynamic";
interface IData {
  color: string;
  from: string; 
  id: number;
  title: string;
  to: string; 
}
export default function CardSalesreport() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const getDataCalendar = async () => {
      const res = await getReportCalendar();
      setData(res);
    };
    getDataCalendar();
  }, []);
  console.log(data);

  return (
    <div className="bg-white p-4 rounded-xl my-4">
      <Calendar events={data} />
    </div>
  );
}
