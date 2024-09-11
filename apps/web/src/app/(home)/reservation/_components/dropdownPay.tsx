import { MouseEventHandler } from 'react';
import { MdOutlinePayment } from 'react-icons/md';

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
    <div>
      <h1 className="font-semibold pb-4 text-xl">Bayar Menggunakan</h1>
      <button
        onClick={setDrop}
        className="w-full text-lg hover:text-white border-2 border-btn text-btn hover:bg-btn   font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center  "
        type="button"
      >
        {payMethod}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className={`z-10 ${drop ? 'block' : 'hidden'} w-full bg-abu  divide-y rounded-lg shadow `}
      >
        <ul
          className="py-2 text-sm  bg-white "
        >
          <li className="border-b-2 bg-w">
            <button
              className="flex  items-center gap-5 text-lg px-4 py-2"
              onClick={paymentVA}
            >
              <MdOutlinePayment />
              <p>Virtual Account</p>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-5 text-lg px-4 py-2"
              onClick={paymentTF}
            >
              <MdOutlinePayment />
              <p>Transfer Bank</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
