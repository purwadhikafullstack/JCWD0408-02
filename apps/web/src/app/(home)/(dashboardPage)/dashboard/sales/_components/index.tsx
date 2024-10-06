import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { BarChart } from "@mui/x-charts/BarChart";

const rows: GridRowsProp = [
  {
    id: 4,
    user: "Ahmat",
    reservasi: 10,
    amount: "Rp. 5.000.000,00",
  },
  {
    id: 3,
    user: "Basim",
    reservasi: 5,
    amount: "Rp. 2.000.000,00",
  },
  {
    id: 3,
    user: "Siska",
    reservasi: 2,
    amount: "Rp. 1.000.000,00",
  },
  {
    id: 4,
    user: "Zoey",
    reservasi: 5,
    amount: "Rp. 5.000.000,00",
  },
  { id: 5, user: "Joy Mastofa", property: "IBIS" },
  {
    id: 6,
    user: "MUI Base",
    reservasi: 5,
    amount: "Rp. 1.000.000,00",
  },
];

const columns: any[] = [
  { field: "id", hide: true },
  { field: "user", headerName: "User", width: 150 },
  { field: "reservasi", headerName: "Jumlah Reservasi", width: 200 },
  { field: "amount", headerName: "Jumlah Pendapatan", width: 150 },
];

export default async function SalesUserX() {
  return (
    <div>
  
    </div>
  );
}
