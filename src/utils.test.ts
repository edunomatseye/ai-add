import { describe, it, expect } from 'vitest';
import { add, subtract, multiply } from './utils';

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

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('handles negative numbers', () => {
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(2, -5)).toBe(-10);
    expect(multiply(-2, -5)).toBe(10);
  });

  it('returns zero when multiplying by zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  it('handles decimal numbers', () => {
    expect(multiply(2.5, 2)).toBe(5);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  it('handles large numbers', () => {
    expect(multiply(1000000, 1000000)).toBe(1000000000000);
  });

  it('handles fractions correctly', () => {
    expect(multiply(1 / 3, 3)).toBeCloseTo(1);
  });

  it('is commutative', () => {
    expect(multiply(2, 3)).toBe(multiply(3, 2));
  });

  it('handles very small numbers', () => {
    expect(multiply(1e-10, 1e-10)).toBeCloseTo(1e-20);
  });
});
