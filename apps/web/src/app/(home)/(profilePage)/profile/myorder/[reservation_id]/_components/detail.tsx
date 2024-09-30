import { FaCalendarAlt } from "react-icons/fa";
export default function ReservationDetailBody() {
  const components = [
    { keywords: "Check in", text: "5, Jan 2020" },
    { keywords: "Check out", text: "6,Jan 2020" },
    { keywords: "Property", text: "Ibis" },
    { keywords: "Type", text: "Vila" },
    { keywords: "Tamu", text: "2 orang" },
    { keywords: "Kamar", text: "Deluxe" },
    { keywords: "Pembayaran", text: "Manual" },
    
  ];
  return (
    <div className="flex w-[40%] flex-col gap-4">
      <div className="w-fulll flex flex-col gap-1">
        <div className="flex items-center gap-2 text-sm text-orange-500">
          <FaCalendarAlt />
          <p>Dipesan tanggal - </p>
          <p>20, Agustus 2024</p>
        </div>
        <p className="text-xl font-semibold">Jovinda</p>
        <p className="text-sm text-gray-500">
          Order ID : 231sda-321zad-231adassd-2131dws
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {components.map((item, idx) => {
          return (
            <div>
              <p className="font-semibold">{item.keywords}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
