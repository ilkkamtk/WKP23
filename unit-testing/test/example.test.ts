// example.test.ts
import { test, expect } from 'vitest';
import { add } from '../src/example';

test('add function should correctly add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
