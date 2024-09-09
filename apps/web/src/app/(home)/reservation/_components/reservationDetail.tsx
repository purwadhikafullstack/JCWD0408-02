import PaymentMethod from './paymentMethod';

export default function ReservationDetail() {
  return (
    <div className="lg:w-[35%]">
      <div className="flex gap-2 pb-5 items-center">
        <h1 className="text-3xl font-bold ">RESERVASI</h1>
      </div>
      <h2 className="text-xl text-hitam font-bold">Pemesanan Anda</h2>
      <div className="grid grid-cols-2 pt-2 pb-4 gap-x-6 gap-y-4 justify-between">
        <div>
          <p className="font-semibold py-1">Tanggal</p>
          <p>26–27 Sep</p>
        </div>
        <button className="underline underline-offset-4 font-medium text-end">
          Edit
        </button>
        <div>
          <p className="font-semibold py-1">Tamu</p>
          <p>1 Tamu</p>
        </div>
      </div>
      <hr />
      <PaymentMethod />
      <hr />
    </div>
  );
}
