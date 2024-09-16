import CardOrder from "./CardOrder";

const ListCardOrder = () => {
  return (
    <div className="mt-5 w-full rounded-md border bg-slate-50 shadow-lg">
      <div className="grid grid-cols-1 place-items-center px-3 py-5 md:grid-cols-2 md:gap-4 gap-5 lg:grid-cols-3 lg:gap-4">
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </div>
    </div>
  );
};

export default ListCardOrder;
