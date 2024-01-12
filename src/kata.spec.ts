import { fizzbuzz } from './kata';

describe('Kata', () => {
  test.each([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [4, '4'],
    [5, 'Buzz'],
    [6, 'Fizz'],
    [7, '7'],
    [8, '8'],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [15, 'FizzBuzz'],
    [30, 'FizzBuzz'],
  ])('should convert %p to %p', (input, expected) => {
    expect(fizzbuzz(input)).toStrictEqual(expected);
  });
});
