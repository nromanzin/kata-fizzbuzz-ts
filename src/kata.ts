export function fizzbuzz(input: number): string {
  let output = '';
  if (isMultipleOf(input, 3)) {
    output += 'Fizz';
  }
  if (isMultipleOf(input, 5)) {
    output += 'Buzz';
  }
  return output === '' ? input.toString() : output;
}

function isMultipleOf(input: number, divider: number): boolean {
  return input % divider === 0;
}
