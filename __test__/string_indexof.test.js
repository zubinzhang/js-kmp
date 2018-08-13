// Create by Zubin on 2018-08-13 10:27:07
import indexOf from '../src/string_indexof';

describe('string indexof', () => {
  it('should find word position in given text', () => {
    expect(indexOf('china', 'cn')).toBe(-1);
    expect(indexOf('china', 'c')).toBe(0);
    expect(indexOf('china', 'in')).toBe(2);
  });
});
