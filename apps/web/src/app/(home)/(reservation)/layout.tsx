import ReservationNav from "./_components/reservationNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ReservationNav />
      {children}
    </div>
  );
}
