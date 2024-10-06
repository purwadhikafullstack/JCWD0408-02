import PriceDetail from "../_components/priceDetail";
import ReservationDetail from "../_components";
import { IoChevronBackOutline } from "react-icons/io5";
import { getRoomReservation } from "@/libs/fetch/reservation";
import Link from "next/link";
export default async function Reservation({ params }: any) {
  const { id } = params;
  const data = await getRoomReservation(id);
  const price: number = data.price;
  const tenant = data.tenant.username;
  return (
    <div className="mb-4 flex flex-col items-center lg:pt-10">
      <div className="flex flex-col gap-5 px-3 pt-2 lg:flex-row-reverse lg:justify-center lg:gap-20 lg:pb-14 lg:pt-10">
        <PriceDetail
          roomType={data.type}
          location={data.property.location}
          price={price}
          propertyName={data.property.name}
          tenantName={tenant}
          image={data.property.thumbnail}
        />
        <ReservationDetail price={price} capacity={data.capacity} />
        <Link href={`/detailproperty/${data.property.id}`}>
          <IoChevronBackOutline className="hidden size-10 rounded-full p-2 hover:bg-abu lg:block" />
        </Link>
      </div>
    </div>
  );
}
