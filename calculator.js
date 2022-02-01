const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  devide: (a, b) => (b === 0 ? `Can't devide by zero` : a / b),
  multiply: (a, b) => a * b,
};

export default calculator;
