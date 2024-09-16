import "./globals.css";
import SideBarProfile from "./profile/_components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <div className="mx-auto mt-10 flex w-full max-w-7xl justify-between gap-8">
        <SideBarProfile />
        <main className="flex-1">{children}</main>
      </div>
    </main>
  );
}
