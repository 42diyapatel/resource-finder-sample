import { describe, expect, it } from 'vitest';
import { formatDistance, normalizeName } from './utils';

describe('normalizeName', () => {
  it('lowercases and strips punctuation', () => {
    expect(normalizeName("St. Mary's Shelter")).toBe('st marys shelter');
  });

  it('collapses surrounding and repeated whitespace', () => {
    expect(normalizeName('  Peel   Legal  Aid ')).toBe('peel legal aid');
  });
});

describe('formatDistance', () => {
  it('shows metres below one kilometre', () => {
    expect(formatDistance(0.8)).toBe('800 m away');
  });

  it('shows one decimal place above one kilometre', () => {
    expect(formatDistance(12.64)).toBe('12.6 km away');
  });
});
