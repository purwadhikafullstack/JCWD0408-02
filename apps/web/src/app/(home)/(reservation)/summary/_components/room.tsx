import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function Room() {
  return (
    <div className="flex gap-4 rounded-xl border-2 px-2 py-2 lg:px-4 lg:max-w-[50%]">
      <Image
        src={"/dummy/kamar.jpg"}
        width={500}
        height={400}
        alt="room"
        className="rounded-xl lg:w-[280px]"
      />
      <div className="">
        <p className="text-btn">The choice of Families</p>
        <p>King bed Villa Istana Bunga</p>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-300" />
          <p>4.8</p>
        </div>
      </div>
    </div>
  );
}
