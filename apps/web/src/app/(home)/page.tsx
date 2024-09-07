import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">


      <h1 className="px-5 py-3  bg-[#5BA5A5] text-white">Hello World</h1>
      <h1 className="px-5 py-3  bg-[#4E9090] text-white">Hello World</h1>
      <h1 className="px-5 py-3 font-bold bg-[#5BA5A5] text-hitam">Hello World</h1>
      <h1 className="px-5 py-3  bg-abu text-[#e3e3e3]">Hello World</h1>
    </div>
  );
}
