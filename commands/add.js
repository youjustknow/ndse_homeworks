import { addDays, addMonths, addYears } from "date-fns";
import { displayDate } from "../utils/shared.js";

const addCommand = ({ months, days, years }) => {
  let date = new Date();
  
  if (months) date = addMonths(date, months);
  if (days) date = addDays(date, days);
  if (years) date = addYears(date, years);

  displayDate(date);
}

export default addCommand;
