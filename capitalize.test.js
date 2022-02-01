const { test } = require('@jest/globals');
import capitalizeString from './capitalize';

test('Hello', () => expect(capitalizeString('hello')).toBe('Hello'));

test('Hello world', () =>
  expect(capitalizeString('hello   world')).toBe('Hello world'));
