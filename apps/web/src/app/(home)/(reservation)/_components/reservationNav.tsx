'use client';

import { Logo, LogoScroll } from '@/components/Logo';
import Link from 'next/link';

const ReservationNav = () => {
  return (
    <nav className={`  w-full border-b-2 py-4 lg:py-4 bg-white `}>
      <main className="max-w-7xl  px-8 py-2 md:px-10">
        <div className="flex justify-center lg:justify-start">
          <Link href={'/'}>
            <Logo size="scale-150 " colorBird="btn" colorText="hitam" />
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default ReservationNav;
