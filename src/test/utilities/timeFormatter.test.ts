import { timeFormatter } from "../../app/utilities/timeFormatter";

describe('timeFormatter', () => {
  it('should format 0 centiseconds correctly', () => {
    const result = timeFormatter(0);
    expect(result).toStrictEqual({ minutes: '00', seconds: '00', centiseconds: '00' });
  });

  it('should format 1 second correctly', () => {
    const result = timeFormatter(1000);
    expect(result).toStrictEqual({ minutes: '00', seconds: '01', centiseconds: '00' });
  });

  it('should format 1 minute correctly', () => {
    const result = timeFormatter(60000);
    expect(result).toStrictEqual({ minutes: '01', seconds: '00', centiseconds: '00' });
  });

  it('should format 1 minute and 1 second correctly', () => {
    const result = timeFormatter(61000);
    expect(result).toStrictEqual({ minutes: '01', seconds: '01', centiseconds: '00' });
  });

  it('should format 1 minute and 1 second correctly', () => {
    const result = timeFormatter(541000);
    expect(result).toStrictEqual({ minutes: '09', seconds: '01', centiseconds: '00' });
  });

  it('should format 1 minute and 1 second correctly', () => {
    const result = timeFormatter(3599990);
    expect(result).toStrictEqual({ minutes: '59', seconds: '59', centiseconds: '99' });
  });
});
