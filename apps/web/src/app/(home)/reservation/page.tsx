
import PriceDetail from './_components/priceDetail';
import ReservationDetail from './_components/reservationDetail';
import ReservationNav from './_components/reservationNav';
import { IoChevronBackOutline } from 'react-icons/io5';
export default function Reservation() {
  return (
    <div>
      <ReservationNav />
      <div className="flex flex-col lg:flex-row-reverse lg:justify-center gap-5 lg:gap-20 px-3 pt-2 lg:pt-20  ">
        <PriceDetail />
        <ReservationDetail />
        <IoChevronBackOutline className="size-10 hover:bg-abu rounded-full p-2 hidden lg:block" />
      </div>
  
    </div>
  );
}
