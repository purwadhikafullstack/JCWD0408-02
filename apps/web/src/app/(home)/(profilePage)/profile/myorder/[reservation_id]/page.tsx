import MyReservationDetail from "./_components";
import { Raleway } from "@next/font/google";
import "@smastrom/react-rating/style.css";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
});

export default function MyOrderDetail() {
  return (
    <div className={`rounded-xl bg-white font-[400] ${raleway.className}`}>
      <MyReservationDetail />
    </div>
  );
}
