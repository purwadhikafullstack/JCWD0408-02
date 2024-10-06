import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { BarChart } from "@mui/x-charts/BarChart";

const rows: GridRowsProp = [
  {
    id: 1,
    user: "Aello",
    property: "IBIS",
    amount: "Rp. 50.000.000,00",
    reservasi: 30,
  },
  {
    id: 3,
    user: "Baterial UI",
    property: "Villa Istana Air",
    amount: "Rp. 50.000.000,00",
    reservasi: 22,
  },
  {
    id: 6,
    user: "MUI Base",
    property: "Hotel Bali Resort",
    amount: "Rp. 50.000.000,00",
    reservasi: 50,
  },
];

const columns: any[] = [
  { field: "id", hide: true },
  { field: "property", headerName: "Property", width: 150 },
  { field: "reservasi", headerName: "Jumlah Reservasi", width: 200 },
  { field: "amount", headerName: "Pendapatan", width: 150 },
];

export default async function SalesProperty() {
  return (
    <div className="">
      <h1>Daftar Penjualan Berdasarkan Property</h1>
      <div className="flex gap-4 bg-white">
        <div className="h-max w-max">
          <DataGrid rows={rows} columns={columns} />
        </div>
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
    </div>
  );
}
