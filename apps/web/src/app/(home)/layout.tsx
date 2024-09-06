import type { Metadata } from 'next';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='text-blue-300'>{children}</div>;
}
