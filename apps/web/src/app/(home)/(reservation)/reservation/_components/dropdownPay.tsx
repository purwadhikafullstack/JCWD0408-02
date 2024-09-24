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
    <div className="">
      <h1 className="pb-4 text-xl font-semibold">Bayar Menggunakan</h1>

      <button
        onClick={setDrop}
        className="justify-between flex w-full items-center rounded-lg border-2 border-btn px-5 py-2.5 text-center text-lg font-medium text-btn duration-300 hover:bg-btn hover:text-white"
        type="button"
      >
        {payMethod}
        <RiArrowDownWideFill />
      </button>

      <div
        className={`z-10 ${drop ? "block" : "hidden"} w-full divide-y rounded-lg bg-abu shadow`}
      >
        <ul className="bg-white py-2 text-sm duration-300">
          <li className="bg-w border-b-2">
            <button
              className="flex items-center gap-5 px-4 py-2 text-lg"
              onClick={paymentVA}
            >
              <MdOutlinePayment />
              <p>Virtual Account</p>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-5 px-4 py-2 text-lg"
              onClick={paymentTF}
            >
              <FaMoneyBillTransfer />
              <p>Transfer Bank</p>
            </button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
