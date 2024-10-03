"use client";
import Image from "next/image";
import { getReviewByUser } from "@/libs/fetch/review";
import { IGetReviewsUser } from "@/types/review";
import { useEffect, useState } from "react";
import { formatDateReservation } from "@/utils/formatDate";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function ReviewProfil() {
  const [reviews, setReviews] = useState<IGetReviewsUser[]>([]);
  useEffect(() => {
    const getReviews = async () => {
      const res = await getReviewByUser();
      setReviews(res.data);
    };
    getReviews();
  }, []);
  console.log(reviews);

  return (
    <div className="">
      <h1 className="mb-6 text-3xl font-semibold">Review Anda</h1>
      <div className="flex flex-col gap-4">
        {reviews?.map((item, idx) => {
          return (
            <div key={idx} className="border-b-2 py-4">
              <div className="flex justify-between py-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-end gap-2">
                    <Image
                      src={item.room.property.thumbnail || "/dummy/kamar.jpg"}
                      alt="property img"
                      width={200}
                      height={200}
                      className="w-[150px] rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.room.property.name}</p>
                      <p className="text-sm font-semibold">{item.room.type}</p>
                      <div className="flex items-center text-btn">
                        <FaLocationDot />
                        <p className="text-sm font-semibold">
                          {item.room.property.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-orange-500">
                    <FaCalendarAlt />
                    <p className="">
                      {formatDateReservation(
                        new Date(item.reservation.startDate),
                      )}{" "}
                      -{" "}
                      {formatDateReservation(
                        new Date(item.reservation.endDate),
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex w-[65%] flex-col">
                  <div className="flex items-center gap-2 text-lg font-sans">
                    <FaStar className="text-yellow-400" />
                    <p>{item.ratings}/5</p>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>
              <div
                className={`${item.feedBack ? "block" : "hidden"} flex w-[60%] flex-col gap-2 rounded-xl bg-latar p-4`}
              >
                <div className="flex gap-2">
                  <Image
                    src={
                      item.room.property.tenant.avatar ||
                      "/dummy/profilDummy.jpg"
                    }
                    alt="property img"
                    width={200}
                    height={200}
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <div>
                    <p>Dari :</p>
                    <p className="font-semibold">
                      {item.room.property.tenant.username}
                    </p>
                  </div>
                </div>

                <p className="">{item.feedBack}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
