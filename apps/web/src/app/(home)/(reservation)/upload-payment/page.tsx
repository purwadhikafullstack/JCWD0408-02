import TotalPrice from "./_components/totalPrice";
import UploadProof from "./_components/upload";

export default function UploadPayment() {
  return (
    <div className="flex items-center py-20 gap-4 px-5">
  
      <TotalPrice />
      <UploadProof />
    </div>
  );
}
