import { fizzbuzz } from './kata';

describe('Kata', () => {
  test.each([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [4, '4'],
    [5, 'Buzz'],
  ])('should convert %p to %p', (input, expected) => {
    expect(fizzbuzz(input)).toStrictEqual(expected);
  });
});
