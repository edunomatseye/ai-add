import { describe, it, expect } from 'vitest';
import { add, subtract } from './utils';

describe('add function', () => {
  it('should correctly add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  it('should correctly add two negative numbers', () => {
    expect(add(-2, -4)).toBe(-6);
  });

  it('should return zero when adding zero to zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('should correctly subtract two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should correctly handle negative numbers', () => {
    expect(subtract(-5, 3)).toBe(-8);
    expect(subtract(5, -3)).toBe(8);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(subtract(10, 10)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  it('should correctly subtract large numbers', () => {
    expect(subtract(1000000, 999999)).toBe(1);
  });

  it('should handle subtracting zero', () => {
    expect(subtract(5, 0)).toBe(5);
    expect(subtract(0, 5)).toBe(-5);
  });
});
