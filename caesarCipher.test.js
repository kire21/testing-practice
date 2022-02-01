import caeserCipher from './caesarCipher';

test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(caeserCipher('SERR')).toBe('free');
});
