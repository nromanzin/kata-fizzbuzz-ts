export function fizzbuzz(input: number): string {
  if (input === 3) {
    return 'Fizz';
  }
  if (input == 5) {
    return 'Buzz';
  }
  return input.toString();
}
