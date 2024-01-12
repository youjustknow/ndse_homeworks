import { displayDate } from '../utils/shared.js';

const currentComandHandler = ({ year, month, date }) => {
  displayDate(new Date(), { year, month, date })
}

export default currentComandHandler;
