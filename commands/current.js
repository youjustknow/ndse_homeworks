import { formatISO, getMonth, getYear } from 'date-fns'

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const display = console.log

const displayCurrentYear = () => {
  const currentYear = getYear(new Date());
  display(currentYear);
}

const displayCurrentMonth = () => {
  const currentMonth = getMonth(new Date());
  display(MONTHS[currentMonth]);
}

const displayCurrentDate = () => {
  const currentDate = formatISO(new Date(), { representation: 'date' });
  display(currentDate);
}

const displayCurrentDateTime = () => {
  const currentDateTime = formatISO(new Date());
  display(currentDateTime)
}

const currentComandHandler = ({ year, month, date }) => {
  if (year) return displayCurrentYear();
  if (month) return displayCurrentMonth();
  if (date) return displayCurrentDate();

  return displayCurrentDateTime();
}

export default currentComandHandler;
