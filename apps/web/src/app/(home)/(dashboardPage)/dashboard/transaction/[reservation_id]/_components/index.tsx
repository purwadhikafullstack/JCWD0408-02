import Confrimation from "./confirmation";
import PropInfo from "./propInfo";
import SummaryTransaction from "./summaryTransaction";

export default function TransactionDetailIndex() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-semibold">Booking ID : 2312321321321</h1>
        <p className="rounded-lg bg-orange-400/30 px-2 py-1 text-sm font-semibold text-orange-600">
          Menunggu Pembayaran
        </p>
      </div>
      <p className="my-2 text-lg text-gray-700">Tanggal Pemesanan : Rabu,25 Sep 2024</p>
      {/* <div className="flex">
        <PropInfo />
      </div> */}
      <SummaryTransaction/>
      <Confrimation/>
    </div>
  );
}
