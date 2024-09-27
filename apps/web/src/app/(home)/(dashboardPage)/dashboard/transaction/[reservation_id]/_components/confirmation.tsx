export default function Confrimation() {
  const info = [
    { info: "Metode Pembayaran", text: "Transfer Manual", style: "" },
    {
      info: "Link Payment Gateway ",
      text: "-",
      style: "text-blue-400 hover:text-blue-600",
    },
    {
      info: "Link Bukti Pembayaran",
      text: "https:/sdasd/sda2312sdad1",
      style: "text-blue-400 hover:text-blue-600",
    },
  ];
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold">Detail Transaksi</h1>
      <div className="mb-2 mt-4 border-b-2"></div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3">
          {info.map((item, idx) => {
            return (
              <div className="font-medium">
                <p className={`font-semibold text-gray-500`}>{item.info}</p>
                <p className={`${item.style} `}>{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Rincian Harga</p>
          <div className="flex gap-2 font-medium">
            <p className="w-[100px] font-semibold text-gray-500">Harga/Malam</p>
            <p>:</p>
            <p className="">IDR 300000</p>
          </div>
          <div className="flex gap-2 font-medium">
            <p className="w-[100px] font-semibold text-gray-500">Total Harga</p>
            <p>:</p>
            <p className="">IDR 600000</p>
          </div>
          <div className="flex  gap-2 mt-4">
            <button className="lg:w-[200px] bg-white  px-4 py-3 rounded-lg text-btn border-2 border-btn hover:text-white font-semibold hover:bg-btnhover duration-300">Konfirmasi Pemesanan</button>
            <button className="lg:w-[200px] bg-red-500 px-4 py-3 rounded-lg text-white font-semibold hover:bg-red-600 duration-300">Tolak Pemesanan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
