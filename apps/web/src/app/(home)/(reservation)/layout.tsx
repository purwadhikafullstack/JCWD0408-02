import ReservationNav from "./_components/reservationNav";
import StepReservation from "./_components/stepReservation";

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
