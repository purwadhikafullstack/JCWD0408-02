import { CiImageOn } from "react-icons/ci";
export default function UploadProof() {
  return (
    <div className="flex flex-col h-[200px] w-full py-4 px-3 items-center  rounded-xl border-2 bg-white">
      <div className="flex justify-between items-center w-full">
        <p>Upload bukti pembayaran</p>
        <p className="px-3 py-1 rounded-full text-sm font-semibold bg-abu">required</p>
      </div>
      <div className="flex justify-center items-center w-full h-full border-2 rounded-xl my-2">
        <CiImageOn />
      </div>
    </div>
  );
}
