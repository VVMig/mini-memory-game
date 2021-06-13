import moment from 'moment';

export const timeFormat = (seconds: number) =>
  moment().startOf('day').seconds(seconds).format('H:mm:ss');
