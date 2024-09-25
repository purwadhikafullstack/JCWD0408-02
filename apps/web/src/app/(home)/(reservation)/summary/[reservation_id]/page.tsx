import StepReservation from "../../_components/stepReservation";
import Detail from "../_components/detail";

export default function Summary() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 bg-latar px-4 py-4">
      <StepReservation current={2} />
      <Detail />
    </div>
  );
}
