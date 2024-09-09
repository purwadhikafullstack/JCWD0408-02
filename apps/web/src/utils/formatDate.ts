import { format } from "date-fns";
import { id } from "date-fns/locale";

// OUTPUT SABTU, 14 SEP
export const formatDateId = (date: Date | null) => {
  const targetDate = date || new Date();
  return format(targetDate, "EEEE, dd MMM", { locale: id });
};
