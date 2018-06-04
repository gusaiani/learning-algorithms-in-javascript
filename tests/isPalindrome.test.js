const isPalindrome = require('../isPalindrome');

test('A true isPalindrome test', () => {
  expect(isPalindrome('abcdcba')).toBe(true);
});

test('A true isPalindrome test', () => {
  expect(isPalindrome('abccba')).toBe(true);
});

test('A false isPalindrome test', () => {
  expect(isPalindrome('variacao')).toBe(false);
});

test('A false isPalindrome test', () => {
  expect(isPalindrome('Madam, I’m Adam.')).toBe(true);
});
