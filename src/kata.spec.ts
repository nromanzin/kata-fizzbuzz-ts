import { fizzbuzz } from './kata';

describe('Kata', () => {
  test('should get 1 if input is 1', () => {
    expect(fizzbuzz(1)).toStrictEqual('1');
  });
});
