import { MdOutlinePayment } from 'react-icons/md';

interface IProps {
  drop: any;
  setDrop: any;
  payMethod: any;
  paymentVA: any;
  paymentTF: any;
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
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdownId"
        onClick={setDrop}
        className="w-full text-lg text-white bg-btn hover:bg-btnhover focus:ring-2  focus:outline-none focus:ring-latar font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-button "
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

      <div
        id="dropdown"
        className={`z-10 ${drop ? 'block' : 'hidden'} w-full bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="border-b-2">
            <button
              className="flex items-center gap-5 text-lg px-4 py-2"
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
