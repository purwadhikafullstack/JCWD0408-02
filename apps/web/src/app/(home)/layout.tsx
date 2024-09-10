import ToastComp from "@/components/ToastComp";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ToastComp />
      {children}
    </div>
  );
}
