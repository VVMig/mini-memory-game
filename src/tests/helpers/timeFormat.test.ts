import { timeFormat } from '../../app/helpers';

describe('Time format', () => {
  it('Should return string with data in format hh:mm:ss', () => {
    const seconds = 60000000;

    expect(timeFormat(seconds)).toEqual('16:40:00');
  });

  it('Should return string with data in format hh:mm:ss', () => {
    const seconds = 86500000;

    expect(timeFormat(seconds)).toEqual('24:01:40');
  });

  it('Should return string with data in format hh:mm:ss', () => {
    const seconds = 160500000;

    expect(timeFormat(seconds)).toEqual('44:35:00');
  });

  it('Should return string with data in format hh:mm:ss', () => {
    const milliseconds = 500000;

    expect(timeFormat(milliseconds)).toEqual('0:08:20');
  });

  it('Should return string with data in format hh:mm:ss:ms', () => {
    const seconds = 86500900;

    expect(timeFormat(seconds, true)).toEqual('24:01:40:90');
  });

  it('Should return string with data in format hh:mm:ss:ms', () => {
    const seconds = 160500586;

    expect(timeFormat(seconds, true)).toEqual('44:35:00:58');
  });

  it('Should return string with data in format hh:mm:ss:ms', () => {
    const milliseconds = 500019;

    expect(timeFormat(milliseconds, true)).toEqual('0:08:20:01');
  });
});
