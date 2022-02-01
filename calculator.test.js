import calculator from './calculator';

test('Adds 1 and 2 to equal 3', () => expect(calculator.add(1, 2)).toBe(3));

test('Subtract 1 and 2 to equal -1', () =>
  expect(calculator.subtract(1, 2)).toBe(-1));

test(`Devide 1 and 2 to equal Can't devide by zero`, () =>
  expect(calculator.devide(1, 0)).toBe(`Can't devide by zero`));

test('Devide 1 and 2 to equal 0.5', () =>
  expect(calculator.devide(1, 2)).toBe(0.5));

test('Multiply 1 and 2 to equal 2', () =>
  expect(calculator.multiply(1, 2)).toBe(2));
