export default function SummaryPayment() {
  return (
    <div className="w-[25%] bg-slate-200/20 p-4 rounded-lg shadow-sm ">
      <h2 className="font-semibold text-lg  mb-4">Rincian Pembayaran</h2>
      <table className="min-h-[200px] w-full">
        <tr className="py-2">
          <td className="mr-5">Harga Kamar</td>
          <td className="text-end"> Rp.50000</td>
        </tr>
        <tr className="text-[13px] text-gray-500">
          <td>2 malam</td>
          <td className="text-end">2x Rp50000</td>
        </tr>
        <tr className="border-b ">
          <td>Pajak 15%</td>
          <td className="text-end"> 30000</td>
        </tr>
     
        <tr>
          <td className="font-semibold">Total</td>
          <td className="text-end font-semibold">{` 75000`}</td>
        </tr>
      </table>
    </div>
  );
}
