import PriceDetail from "../_components/priceDetail";
import ReservationDetail from "../_components";

import { IoChevronBackOutline } from "react-icons/io5";
import { getRoomById } from "@/libs/fetch/property";

export default async function Reservation({ params }: any) {
  const roomType = "Deluxe";
  const location = "Bandung";
  const property = "Hotel Layangan";
  const tenant = "Ibis";
  const price = 300000;
  const { id } = params;

  const data = await getRoomById(id);
  console.log(data.data);
  console.log("IDINYA", id);

  return (
    <div className="flex flex-col items-center pt-10">
      <div className="flex flex-col gap-5 px-3 pb-10 pt-2 lg:flex-row-reverse lg:justify-center lg:gap-20 lg:pt-10">
        <PriceDetail
          roomType={roomType}
          location={location}
          price={price}
          propertyName={property}
          tenantName={tenant}
        />
        <ReservationDetail />
        <IoChevronBackOutline className="hidden size-10 rounded-full p-2 hover:bg-abu lg:block" />
      </div>
    </div>
  );
}
