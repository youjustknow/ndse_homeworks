import { formatISO, getMonth, getYear } from "date-fns";

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const display = console.log

export const displayDate = (datetime, { year, month, date } = {}) => {
  if (year) return display(getYear(datetime));
  if (month) return display(MONTHS[getMonth(datetime)]);
  if (date) return display(formatISO(datetime, { representation: 'date' }));

  return display(formatISO(datetime));
}
