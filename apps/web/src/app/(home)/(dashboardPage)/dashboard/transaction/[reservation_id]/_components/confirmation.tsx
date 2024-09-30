"use client";
import { confirmPayment, rejectPayment } from "@/libs/fetch/transaction";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import PopUpCancel from "./popUpCancel";

interface IProps {
  method: string;
  payLink: string;
  proofLink: string;
  price: number;
  total: number;
}
export default function Confrimation({
  method,
  payLink,
  proofLink,
  price,
  total,
}: IProps) {
  const params = useParams();
  const reservation_id = params.reservation_id;
  const handleConfirm = async () => {
    try {
      await confirmPayment(reservation_id as string);
      toast.success("Transaksi Dikonfirmasi");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "error");
    }
  };
  const handleReject = async () => {
    try {
      await rejectPayment(reservation_id as string);
      toast.success("bukti ditolak, kembali menunggu pembayaran");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "error");
    }
  };
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold">Detail Transaksi</h1>
      <div className="mb-2 mt-4 border-b-2"></div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="font-medium">
            <p className={`font-semibold text-gray-500`}>Metode Pembayaran</p>
            <p>{method == "TF" ? "Transfer Manual" : "Payment Gateway"}</p>
          </div>
          <div className="font-medium">
            <p className={`font-semibold text-gray-500`}>
              Link Payment Gateway
            </p>
            <Link
              target="_blank"
              href={payLink}
              className="text-blue-700 hover:text-blue-600"
            >
              {method == "VA" ? payLink : "-"}
            </Link>
          </div>
          <div className="font-medium">
            <p className={`font-semibold text-gray-500`}>
              Link Bukti Pembayaran
            </p>
            <Link
              target="_blank"
              href={proofLink}
              className="text-blue-700 hover:text-blue-600"
            >
              {method == "TF" ? proofLink : "-"}
            </Link>
          </div>
          <button
            onClick={() => handleReject()}
            className="flex w-max items-center gap-2 rounded-lg bg-red-500 px-4 py-3 font-semibold text-white duration-150 hover:bg-red-600"
          >
            <p> Tolak Bukti Pembayaran</p>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Rincian Harga</p>
          <div className="flex gap-2 font-medium">
            <p className="w-[100px] font-semibold text-gray-500">Harga/Malam</p>
            <p>:</p>
            <p className="">IDR {price}</p>
          </div>

          <div className="flex gap-2 font-medium">
            <p className="w-[100px] font-semibold text-gray-500">Total Harga</p>
            <p>:</p>
            <p className="">IDR {total}</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => handleConfirm()}
              className="rounded-lg bg-btn px-4 py-3 font-semibold text-white duration-300 hover:bg-btnhover hover:text-white lg:w-[250px]"
            >
              Konfirmasi Pemesanan
            </button>

            <PopUpCancel />
          </div>
        </div>
      </div>
    </div>
  );
}
