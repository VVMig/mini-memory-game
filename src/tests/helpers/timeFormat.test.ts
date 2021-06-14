import { timeFormat } from '../../app/helpers';

describe('Time format', () => {
  it('Should return string with data in format hh:ss:mm', () => {
    const seconds = 60000;

    expect(timeFormat(seconds)).toEqual('16:40:00');
  });

  it('Should return string with data in format hh:ss:mm', () => {
    const seconds = 86500;

    expect(timeFormat(seconds)).toEqual('24:01:40');
  });

  it('Should return string with data in format hh:ss:mm', () => {
    const seconds = 160500;

    expect(timeFormat(seconds)).toEqual('44:35:00');
  });

  it('Should return string with data in format hh:ss:mm', () => {
    const seconds = 500;

    expect(timeFormat(seconds)).toEqual('0:08:20');
  });
});
