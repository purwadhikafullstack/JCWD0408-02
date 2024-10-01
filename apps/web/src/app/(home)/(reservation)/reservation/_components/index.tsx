"use client";
import { useState } from "react";
import BookingDate from "./bookingDate";
import DropdownPay from "./dropdownPay";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import { IReservation } from "@/types/reservation";
import { navigate } from "@/libs/server";
import { axiosInstance } from "@/libs/axios";
interface IProps {
  price: number;
}
export default function ReservationDetail({ price }: IProps) {
  const [drop, setDrop] = useState<boolean>(false);
  const [payMethod, setPayMethod] = useState<string>("Virtual Account");
  const searchParams = useSearchParams();
  const startDate: any = new Date(searchParams.get("checkin")!);
  const endDate: any = new Date(searchParams.get("checkout")!);
  const params = useParams();
  const room_id: string = params.id as string;

  const millisecondsPerNight = 24 * 60 * 60 * 1000;

  const nights = Math.round((endDate - startDate) / millisecondsPerNight);
  console.log(nights);

  const priceNight = (price as number) * nights;
  const total = (priceNight as number) + (priceNight as number) * 0.15;
  console.log(total);

  const handleDropdownVA = () => {
    setPayMethod("Virtual Account");
    setDrop(false);
  };
  const handleDropdownTF = () => {
    setPayMethod("Transfer Bank");
    setDrop(false);
  };
  const handleDrop = () => {
    setDrop(!drop);
  };
  const token = Cookies.get("token");
  const handlePaymentVa = async () => {
    try {
      const res = await axios.post(
        `https://lemur-rare-eft.ngrok-free.app/api/reservation/VA/${room_id}`,
        {
          price: total,
          startDate: startDate,

          endDate: endDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      );

      toast.success("Berhasil Membuat Reservasi, Lakukan proses pembayaran");
      navigate(res.data.URL);
    } catch (error: any) {
      typeof error.response?.data?.msg == "string"
        ? toast.error(error.response?.data?.msg)
        : toast.error("error");
    }
  };
  const handlePaymentTf = async () => {
    try {
      const res = await axiosInstance.post(
        `/api/reservation/TF/${room_id}`,
        {
          price: total,
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      );

      toast.success("Reservasi dibuat, silahkan upload bukti pembayaran");
      navigate(`/reservation/upload-payment/${res.data.id}`);
    } catch (error: any) {
      typeof error.response?.data?.msg == "string"
        ? toast.error(error.response?.data?.msg)
        : "error";
    }
  };

  return (
    <div className="lg:w-[40%]">
      <div className="flex items-center gap-2 pb-2">
        <h1 className="text-2xl font-bold">RESERVASI</h1>
      </div>
      <h2 className="mb-2 text-xl font-bold text-hitam">Pemesanan Anda</h2>
      <div className="flex flex-col justify-between gap-x-6 gap-y-2 pb-2 pt-2">
        <BookingDate />
        {/* <div>
          <p className="py-1  font-semibold">Tamu</p>
          <p className="text-lg">1 Tamu</p>
        </div> */}
      </div>

      <div className="py-4">
        <DropdownPay
          drop={drop}
          setDrop={handleDrop}
          payMethod={payMethod}
          paymentVA={handleDropdownVA}
          paymentTF={handleDropdownTF}
        />
        <h1 className="my-2 py-1 text-lg font-semibold">
          Kebijakan pembatalan
        </h1>
        <p className="">
          Pembatalan gratis dua hari sebelum waktu Check-in. Jika dibatalkan
          setelah itu maka Anda akan mendapatkan pengembalian uang sebagian.
        </p>
      </div>

      <div className="flex flex-col">
        <h1 className="pb-2 text-lg font-semibold">Aturan dasar</h1>
        <p className="">
          Kami meminta setiap tamu untuk mengingat beberapa hal sederhana
          mengenai apa saja yang perlu dilakukan untuk menjadi tamu yang luar
          biasa.
        </p>
        <div className="py-2 pl-4">
          <ul className="list-disc">
            <li className="m mb-2">Patuhi peraturan rumah</li>
            <li>
              Perlakukan rumah milik Tuan Rumah Anda seperti rumah Anda sendiri
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="pt-2 text-[13px] leading-snug">
        Dengan memilih tombol di bawah ini, saya menyetujui
        <span className="font-semibold underline">
          {" "}
          Peraturan Tuan Rumah{" "}
        </span>{" "}
        ,
        <span className="font-semibold underline">Aturan dasar untuk tamu</span>
        ,
        <span className="font-semibold underline">
          Kebijakan Pemesanan Ulang dan Pengembalian Uang Nezztar
        </span>
        , dan bahwa Nezztar{" "}
        <span className="font-semibold underline">
          bisa membebankan biaya ke metode pembayaran saya jika saya
        </span>{" "}
        bertanggung jawab atas kerusakan.
      </p>
      <button
        onClick={
          payMethod == "Virtual Account" ? handlePaymentVa : handlePaymentTf
        }
        className="mt-4 w-full rounded-xl bg-btn px-6 py-4 text-lg font-semibold text-white duration-300 hover:bg-btnhover lg:w-max"
      >
        Lanjutkan dan Bayar
      </button>
    </div>
  );
}
