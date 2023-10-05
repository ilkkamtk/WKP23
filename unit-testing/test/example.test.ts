// example.test.ts
import { it, expect, describe } from 'vitest';
import { add, isValidEmail, reverseString, subtract } from '../src/example';

describe('Math operations', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should correctly subtract two numbers', () => {
    expect(subtract(3, 2)).toBe(1);
  });
});

describe('Exercises', () => {
  it('should correctly reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe(''); // Test with an empty string
    expect(reverseString('12345')).toBe('54321'); // Test with numbers
    expect(reverseString('A man, a plan, a canal, Panama')).toBe(
      'amanaP ,lanac a ,nalp a ,nam A',
    ); // Test with a palindrome sentence
  });

  it('should validate email address (true/false)', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail(1233)).toBe(false);
  });
});
