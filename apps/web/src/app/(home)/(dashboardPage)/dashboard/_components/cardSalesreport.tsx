import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const CardSalesreport = () => {
  return (
    <div className="mt-1 flex h-[250px] w-full items-center justify-center rounded-md border bg-slate-50/50 shadow-md">
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default CardSalesreport;
