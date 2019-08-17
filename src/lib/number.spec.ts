import test, { ExecutionContext } from 'ava';
import { double } from './number';

function testDouble(
  t: ExecutionContext,
  input: number,
  expected: number
): void {
  t.is(double(input), expected);
}

testDouble.title = (
  providedTitle: string = '',
  input: number,
  expected: number
) =>
  `${providedTitle} should correctly double ${input} to make ${expected}`.trim();

test(testDouble, 2, 4);
test(testDouble, 4, 8);
test(testDouble, 0, 0);
test(testDouble, -1, -2);
