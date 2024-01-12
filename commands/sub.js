import { subDays, subMonths, subYears } from "date-fns";
import { displayDate } from "../utils/shared.js";

const addCommand = ({ months, days, years }) => {
  let date = new Date();
  
  if (months) date = subMonths(date, months);
  if (days) date = subDays(date, days);
  if (years) date = subYears(date, years);

  displayDate(date);
}

export default addCommand;
