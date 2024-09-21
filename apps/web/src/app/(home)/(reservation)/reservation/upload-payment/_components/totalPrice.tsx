import TimerComp from "./proofTimer"

export default function TotalPrice() {
  return (
    <div className="flex flex-col gap-4 rounded-xl lg:max-w-[50%]">
      <h1 className="text-2xl font-semibold">Upload Bukti Pembayaran</h1>
      <p className="text-justify">
        Untuk memastikan kelancaran proses verifikasi, kami meminta Anda untuk
        mengunggah bukti pembayaran dalam waktu 1 jam setelah menerima pesan
        ini. Mohon pastikan bahwa bukti pembayaran yang diunggah jelas dan
        terbaca agar proses dapat berjalan dengan lancar. Jika ada pertanyaan
        atau kesulitan dalam mengunggah, jangan ragu untuk menghubungi kami.
        Terima kasih atas kerjasama Anda.
      </p>
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-btn">Total</p>
        <p className="text-4xl font-bold">IDR. 200.000</p>
      </div>
      <TimerComp/>
    </div>
  );
}
