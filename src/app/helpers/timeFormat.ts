import moment from 'moment';

export const timeFormat = (seconds: number) => {
  const secondsInDay = 86400;
  const hoursInDay = 24;

  const days = seconds / secondsInDay;
  const hours = Math.floor(hoursInDay * days);

  return moment()
    .startOf('year')
    .seconds(seconds)
    .format('H:mm:ss')
    .replace(/^\d{1,2}/, `${hours}`);
};
