// example.ts
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// exercise 1
function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

function isValidEmail(email: string): boolean {
  // Regular expression for a basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export { add, subtract, reverseString, isValidEmail };
