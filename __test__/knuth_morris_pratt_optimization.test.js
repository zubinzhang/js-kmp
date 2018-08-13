// Create by Zubin on 2018-08-11 11:28:30

import knuthMorrisPratt from '../src/knuth_morris_pratt';

describe('knuth morris pratt', () => {
  it('knuthMorrisPratt', () => {
    expect(knuthMorrisPratt('china', 'cn')).toBe(-1);
    expect(knuthMorrisPratt('china', 'c')).toBe(0);
    expect(knuthMorrisPratt('china', 'in')).toBe(2);
    expect(knuthMorrisPratt('abadabdafasdgasadcd', 'sad')).toBe(14);
  });
});
