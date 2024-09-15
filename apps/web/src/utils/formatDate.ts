import { format } from "date-fns";
import { id } from "date-fns/locale";

// OUTPUT SABTU, 14 SEP
export const formatDateId = (date: Date | null) => {
  const targetDate = date || new Date();
  return format(targetDate, "EEEE, dd MMM", { locale: id });
};

//OUTPUT Minggu, 15 Sep 2024

export function formatDateReservation(date: Date | null) {
  // Daftar nama hari dan bulan
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const dayName = date ? days[date.getDay()] : null;
  const day = date ? date.getDate() : null;
  const monthName = date ? months[date.getMonth()] : null;
  const year = date ? date.getFullYear() : null;
  return `${dayName},${day} ${monthName} ${year}`;
}
