// example.test.ts
import { it, expect, describe } from 'vitest';
import { add, subtract } from '../src/example';

describe('Math operations', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should correctly subtract two numbers', () => {
    expect(subtract(3, 2)).toBe(1);
  });
});
