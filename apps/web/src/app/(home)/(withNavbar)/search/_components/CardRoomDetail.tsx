import GridCardRooms from "@/app/(home)/(dashboardPage)/dashboard/(createProperty)/create-property/_components/roomsComp/GridCardRooms";
import CustomDateRangePicker from "@/components/DateAirbnb";
import { getRoomsById } from "@/libs/fetch/rooms";
import { DataProperty, RoomData } from "@/types/property";
import ConvertToIDR from "@/utils/convertIDR";
import React from "react";
import { FaWifi } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdOutlineFreeBreakfast,
  MdOutlineShower,
} from "react-icons/md";

const CardRoomDetail = async ({ id }: { id: string }) => {
  const res = await getRoomsById(id);
  const data: RoomData = res.data.room[0];
  const properti: DataProperty = res.data.room[0].property;
  const tenant = res.data.room[0].tenant;

  return (
    <div>
      <section className="w-full rounded-md border bg-slate-50 px-20 py-10">
        <GridCardRooms data={data} />
        <main className="mt-7 flex justify-between gap-3">
          <div className="w-[800px]">
            <div className="border-b pb-5">
              <h1 className="flex items-center gap-1 text-gray-600">
                <IoLocationOutline />
                <p>{properti.location}</p>
              </h1>
              <h2 className="text-3xl font-semibold text-hitam">
                {properti.category} {properti.name} in{" "}
                {properti.location.split("," || " ")[0]}
              </h2>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-btn/20 px-3 text-hitam">
                  {properti.category == "Villa" ? "Villa" : "Hotel"}
                </div>
                <p>by</p>
                <p className="font-medium text-hitam">{tenant.username}</p>
              </div>
            </div>
            <div className="pt-5">
              <h1 className="text-xl font-semibold text-hitam">Deskripsi</h1>
              <div className="min-h-32 border-b text-sm text-gray-600">
                <p>{data.description}</p>
              </div>
              <div className="pt-5">
                <h1 className="text-xl font-semibold text-hitam">Fasilitas</h1>
                <div className="flex gap-3 text-sm text-gray-600">
                  {data.facility.map((item) => {
                    if (item.name === "Wifi") {
                      return (
                        <div className="flex items-center gap-1">
                          <FaWifi />
                          <p>Wifi</p>
                        </div>
                      );
                    } else if (item.name === "Single bed") {
                      return (
                        <div className="flex items-center gap-1">
                          <MdOutlineBedroomChild />
                          <p>Single bed</p>
                        </div>
                      );
                    } else if (item.name === "Double bed") {
                      return (
                        <div className="flex items-center gap-1">
                          <MdOutlineBedroomParent />
                          <p>Double bed</p>
                        </div>
                      );
                    } else if (item.name === "Breakfast") {
                      return (
                        <div className="flex items-center gap-1">
                          <MdOutlineFreeBreakfast />
                          <p>Breakfast</p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex items-center gap-1">
                          <MdOutlineShower />
                          <p>Shower</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="sticky top-[100px] rounded-lg border bg-white p-7 shadow-md">
              <p className="text-hita text-xl font-semibold">
                {ConvertToIDR(data.price)},00{" "}
                <span className="text-base">/malam</span>
              </p>
              <CustomDateRangePicker />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default CardRoomDetail;
