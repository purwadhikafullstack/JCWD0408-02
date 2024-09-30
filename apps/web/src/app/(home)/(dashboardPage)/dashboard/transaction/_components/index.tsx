"use client";
import { useFormik } from "formik";
import TableTransaction from "./tableTransaction";
import DropDownStatus from "./dropDown";
import { useEffect, useState } from "react";
import { getListTransaction } from "@/libs/fetch/transaction";
import { IReservationList } from "@/types/transaksiTenant";
import { MdRefresh } from "react-icons/md";
import { navigate } from "@/libs/server";
import { useSearchParams } from "next/navigation";

export default function TransactionList() {
  const [transaction, setTransaction] = useState<IReservationList[]>([]);
  const params = useSearchParams();
  const query = params.get("status");

  useEffect(() => {
    const listData = async () => {
      try {
        const res = await getListTransaction(query as string);
        // console.log(res.data);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    listData();
  }, [query]);
  return (
    <div className="rounded-xl bg-white p-4 lg:min-h-[600px] shadow-md">
      <div className="flex flex-col justify-between border-b-[3px] bg-white pb-2 lg:flex-row lg:pb-6 ">
        <div className="flex justify-between pb-4 w-full" >
          <h1 className="text-2xl font-bold">Transaksi</h1>
          <button
            onClick={() => navigate(`/dashboard/transaction`)}
            className="flex items-center gap-4 rounded-md bg-btn px-2 py-1 font-normal text-white hover:bg-btnhover "
          >
            <p className="hidden lg:block">refresh</p>
            <MdRefresh className="text-white" />
          </button>
        </div>
        <div>
          {/* <div>
            <p>search</p>
          </div> */}
        </div>
      </div>
      <table className="mt-4 lg:w-full">
        <thead className="pb-5">
          <tr className="border-b-[3px] text-start text-btn">
            <th className="pb-3 text-start">Booking Id</th>
            <th className="hidden pb-3 text-start lg:table-cell">Pemesan</th>
            <th className="hidden pb-3 text-start lg:table-cell">Property</th>
            <th className="hidden pb-3 text-start lg:table-cell">Room</th>
            <th className="pb-3 text-center lg:text-start">
              <DropDownStatus />
            </th>
            <th className="hidden pb-3 text-start lg:table-cell">
              Tanggal Reservasi
            </th>
          </tr>
        </thead>
        <tbody className="h-max">
          {transaction.map((item, idx) => {
            console.log(transaction);
            return (
              <TableTransaction
                name={item.user.username}
                status={item.statusRes}
                property={item.room.property.name}
                room={item.room.type}
                id={item.id}
                createdAt={item.createdAt}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
