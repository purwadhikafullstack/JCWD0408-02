import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const CardOrder = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-slate-50 shadow-md md:h-[340px]">
      <Image
        src={"/dummy/kamar.jpg"}
        alt="Order image"
        width={100}
        height={100}
        className="h-[140px] w-full rounded-lg object-cover md:h-[180px]"
      />
      <section className="h-full px-3 py-2">
        <main className="flex items-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-btn" />
            <p className="font-medium text-hitam">Jakarta</p>
          </div>
          <div className="flex items-center gap-1">
            <IoStar className="text-yellow-500" />
            <p className="font-medium text-hitam">4.5</p>
          </div>
        </main>

        <main className="my-4 h-[60px] text-sm md:text-base">
          <p className="font-semibold line-clamp-2 text-hitam">
            D'Valley View Lembang RedPartner
          </p>
        </main>

        <div className="flex items-center justify-between text-sm md:text-base">
          <h3 className="font-medium text-hitam">Rp2.767.715</h3>
          <h3 className="text-xs text-gray-500 md:text-sm">1 Kamar</h3>
        </div>
      </section>
    </div>
  );
};

export default CardOrder;
