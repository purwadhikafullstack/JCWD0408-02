import PriceDetail from "./_components/priceDetail";
import ReservationDetail from "./_components/reservationDetail";
import ReservationNav from "../_components/reservationNav";
import { IoChevronBackOutline } from "react-icons/io5";
export default function Reservation() {
  return (
    <div className="flex flex-col gap-5 px-3 pt-2 lg:flex-row-reverse lg:justify-center lg:gap-20 lg:pt-20">
      <PriceDetail />
      <ReservationDetail />
      <IoChevronBackOutline className="hidden size-10 rounded-full p-2 hover:bg-abu lg:block" />
    </div>
  );
}
