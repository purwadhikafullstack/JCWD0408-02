import StepReservation from "../../../_components/stepReservation";
import ImageInput from "../_components";
import UploadFile from "../_components";
import TotalPrice from "../_components/totalPrice";

export default function UploadPayment() {
  return (
    <div className="flex flex-col items-center pt-10">
      <StepReservation current={1} />
      <div className="flex flex-col justify-center gap-5 px-5 pt-6 lg:flex-row lg:gap-20 lg:pt-20">
        <TotalPrice />
        <ImageInput />
      </div>
    </div>
  );
}
