import { MouseEventHandler } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
interface IProps {
  drop: boolean;
  setDrop: MouseEventHandler<HTMLButtonElement>;
  payMethod: string;
  paymentVA: MouseEventHandler<HTMLButtonElement>;
  paymentTF: MouseEventHandler<HTMLButtonElement>;
}
export default function DropdownPay({
  drop,
  setDrop,
  payMethod,
  paymentVA,
  paymentTF,
}: IProps) {
  return (
    <div className="relative">
      <h1 className="pb-4 text-lg font-semibold">Metode Pembayaran</h1>
      <button
        onClick={setDrop}
        className="flex w-full items-center justify-between rounded-lg border-2 border-btn px-5 py-2.5 text-center text-lg font-medium text-btn duration-300 hover:bg-btn hover:text-white"
        type="button"
      >
        {payMethod}
        <RiArrowDownWideFill />
      </button>

      <div
        className={`z-10 ${drop ? "block" : "hidden"} absolute w-full divide-y rounded-lg bg-white/0 duration-100`}
      >
        <ul className="rounded-lg bg-white text-sm shadow-md duration-300">
          <button
            className="flex w-full items-center gap-5 rounded-lg px-4 py-2 text-lg duration-150 hover:bg-slate-100"
            onClick={paymentVA}
          >
            <MdOutlinePayment />
            <p>Virtual Account</p>
          </button>
          <hr />

          <button
            className="flex w-full items-center gap-5 rounded-lg px-4 py-2 text-lg duration-150 hover:bg-slate-100"
            onClick={paymentTF}
          >
            <FaMoneyBillTransfer />
            <p>Transfer Bank</p>
          </button>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
