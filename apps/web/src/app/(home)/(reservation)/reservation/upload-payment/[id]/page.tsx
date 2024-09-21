import ImageInput from "../_components/imageInput";
import UploadFile from "../_components/imageInput";
import TotalPrice from "../_components/totalPrice";

export default function UploadPayment() {
  return (
    <div className="flex flex-col justify-center gap-5 px-5 pt-6 lg:flex-row lg:gap-20 lg:pt-40">
      <TotalPrice />
      <ImageInput />
    </div>
  );
}
