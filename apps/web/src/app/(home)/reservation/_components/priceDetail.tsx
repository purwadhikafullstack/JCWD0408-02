import { Logo } from '@/components/Logo';
import Image from 'next/image';

export default function PriceDetail() {
  return (
    <div
      className="flex flex-col h-max py-5 lg:w-[30%] gap-4 text-hitam px-6 lg:rounded-xl bg-white lg:sticky lg:top-8 border-b-2
     lg:border-2  border-abu w-full"
    >
      <div className="flex gap-2 lg:flex-row flex-col  justify-start lg:items-center">
        <Image
          src={'/dummy/kamar.jpg'}
          width={500}
          height={30}
          alt="kamar"
          className="w-40 rounded-xl"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Minty Sunday Hotel</h1>
          <h2 className="text-sm">Kurapika Tenant</h2>
          <h2 className="text-sm font-semibold">Bandung</h2>
        </div>
      </div>
      <hr className="text-abu" />
      <div>
        <p className="">Min, 15 Sep 2024 - Sen, 16 Sep 2024</p>
        <p className="text-sm">2 Malam • 1 Kamar</p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Tipe Kamar</p>
        <p className='text-sm'>Standard Room</p>
      </div>
      <hr className="text-abu" />
      <h2 className=" font-semibold">Perincian Harga</h2>
      <div className="grid grid-cols-2 gap-x-8  gap-2  gap-y-2">
        <p>IDR 329.789,00 </p>
        <p className="text-end pr-5">x 2 malam</p>
        <p className="font-semibold">TOTAL(IDR)</p>
        <p className="text-end pr-5">IDR 994.000</p>
      </div>
    </div>
  );
}
