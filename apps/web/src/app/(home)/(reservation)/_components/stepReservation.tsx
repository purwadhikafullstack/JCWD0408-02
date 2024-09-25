import { FaCheck } from "react-icons/fa6";
export default function StepReservation({ current }: { current: number }) {
  const step = ["Reservasi", "Pembayaran", "Ringkasan"];
  return (
    <div className="flex gap-8">
      {step.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3 text-sm">
          <div
            className={`${current >= idx ? "bg-btn text-white" : "bg-white"} flex h-10 w-10 items-center justify-center rounded-full border-2 p-2 font-bold`}
          >
            {idx < current ? <FaCheck /> : idx + 1}
          </div>

          {item}
        </div>
      ))}
    </div>
  );
}
