import ListCardOrder from "./ListCardOrder";

const MyOrderpage = () => {
  return (
    <div className="mt-6 pb-10 md:mt-0 lg:px-5">
      <p className="text-2xl font-semibold">Pesanan saya</p>
      <div className="relative mt-5 border-b-2 px-4 pb-1">
        <p className="font-semibold text-btn">List order</p>
        <span className="absolute bottom-[-1px] h-[2px] w-[80px] bg-btn"></span>
      </div>
      <ListCardOrder />
    </div>
  );
};

export default MyOrderpage;
