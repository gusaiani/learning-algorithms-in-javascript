const fizzBuzz = require('../fizzBuzz');

test('FizzBuzz of 1', () => {
  expect(fizzBuzz(1)).toEqual('1');
});

test('FizzBuzz of 3', () => {
  expect(fizzBuzz(3)).toEqual('1 2 fizz');
});

test('FizzBuzz of 15', () => {
  expect(fizzBuzz(15)).toEqual('1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz');
});

