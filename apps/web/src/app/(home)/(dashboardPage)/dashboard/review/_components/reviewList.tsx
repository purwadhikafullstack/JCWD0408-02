import Image from "next/image";
import { FaStar } from "react-icons/fa";
interface IProps {
  username: string;
  propName: string;
  content: string;
  rating: string;
  avatar: string
}

export default function ReviewList({
  username,
  propName,
  content,
  rating,
  avatar
}: IProps) {
  return (
    <div className="lg:flex-row flex-col flex min-h-[250px] gap-2 lg:gap-4 border-b-2 py-6">
      <Image
        src={"/dummy/profilDummy.jpg"}
        width={200}
        height={200}
        alt="profilpic"
        className="w-[50px] h-[50px] lg:h-[100px] lg:w-[100px] rounded-full object-cover"
      />
      <div className="flex flex-col lg:min-w-[150px]">
        <h3 className="text-lg font-semibold">{username}</h3>
        <h3 className="text-btn">{propName}</h3>
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col gap-2">

        <div className="flex gap-2 text-xl">
          <FaStar className="text-xl text-yellow-400" />
          <p className="font-medium">{rating}/5</p>
        </div>
        <p className="text-sm">{content}</p>
        </div>
        <button className="mt-4 rounded-lg border-2 px-4 py-2 text-sm font-semibold hover:shadow-md duration-300">
          Balas Ulasan
        </button>
      </div>
    </div>
  );
}
