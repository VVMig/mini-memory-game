import moment from 'moment';

export const timeFormat = (milliseconds: number, isResult = false) => {
  const millisecondsInDay = 86400000;
  const hoursInDay = 24;

  const days = milliseconds / millisecondsInDay;
  const hours = Math.floor(hoursInDay * days);

  return moment()
    .startOf('year')
    .milliseconds(milliseconds)
    .format(`H:mm:ss${isResult ? ':SS' : ''}`)
    .replace(/^\d{1,2}/, `${hours}`);
};
