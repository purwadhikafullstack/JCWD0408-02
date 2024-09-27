export default function SummaryTransaction() {
  const info = [
    { text: "Booking id", info: "2312321321321" },
    { text: "Property", info: "Ibis" },
    { text: "Room", info: "Deluxe" },
    { text: "Lokasi", info: "Bandung" },
    { text: "Check-in", info: "Sabtu, 5 Jan 2024" },
    { text: "Check-out", info: "Sabtu, 6 Jan 2024" },
  ];

  const customers = [
    { text: "Nama", info: "Andi" },
    { text: "Email", info: "Andi@gmail,com" },
    { text: "No.Telephone", info: "32132132131" },
  ];
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold">Ringkasan</h1>
      <div className="mb-2 mt-4 border-b-2"></div>
      <div className="grid grid-cols-2 justify-between">
        <div className="flex flex-col gap-2">
          {info.map((item, idx) => {
            return (
              <div className="flex gap-4 font-medium">
                <p className="min-w-[80px] text-gray-500">{item.text}</p>
                <p className="text-gray-500">:</p>
                <p className={`col-span-2`}>{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Pemesan</p>
          {customers.map((item, idx) => {
            return (
              <div className="flex gap-4 font-medium">
                <p className="lg:min-w-[100px] text-gray-500">{item.text}</p>
                <p className="text-gray-500">:</p>
                <p
                  className={`${item.text == "Email" ? "text-blue-500 underline underline-offset-1" : ""} col-span-2`}
                >
                  {item.info}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
