import { fizzbuzz } from './kata';

describe('Kata', () => {
  test('should get 1 if input is 1', () => {
    expect(fizzbuzz(1)).toStrictEqual('1');
  });

  test('should get 2 if input is 2', () => {
    expect(fizzbuzz(2)).toStrictEqual('2');
  });
});
