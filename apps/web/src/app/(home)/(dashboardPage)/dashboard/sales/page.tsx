
import SalesProperty from "./_components/salesProperty";
import SalesTransaction from "./_components/salesTransaction";
import SalesUser from "./_components/salesUser";

export default function SalesReport() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
      <SalesUser />
      <SalesProperty/>
      <SalesTransaction/>
    </div>
  );
}
