// Create by Zubin on 2018-08-11 11:28:30

import knuthMorrisPratt, { getNext } from '../src/knuth_morris_pratt';

describe('knuth morris pratt', () => {
  it('getNext', () => {
    expect(getNext('a')).toEqual([-1, 0]);
    expect(getNext('ab')).toEqual([-1, 0, 0]);
    expect(getNext('aba')).toEqual([-1, 0, 0, 1]);
    expect(getNext('abac')).toEqual([-1, 0, 0, 1, 0]);
    expect(getNext('abacdabd')).toEqual([-1, 0, 0, 1, 0, 0, 1, 2, 0]);
  });

  it('knuthMorrisPratt', () => {
    expect(knuthMorrisPratt('china', 'cn')).toBe(-1);
    expect(knuthMorrisPratt('china', 'c')).toBe(0);
    expect(knuthMorrisPratt('china', 'in')).toBe(2);
    expect(knuthMorrisPratt('abadabdafasdgasadcd', 'sad')).toBe(14);
  });
});
