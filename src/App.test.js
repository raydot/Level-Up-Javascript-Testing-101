import { total } from './App';
import { add } from './add';

// Mocked dependency, we make up the return.
jest.mock('./add', () => ({
  add: jest.fn(() => 25),
}));
// Mocking
//const add = jest.fn(() => 3); // this is mocking add(), viola, returns 3
//const add = jest.fn((x, y) => x + y); //  This works for everything, but now you're writing code.

// Test, does it work?
//console.log(add(1, 2));

// test('Fake Test', () => {
//   // Assertion -- asserting something is one way.
//   expect(true).toBeTruthy();
// });

// Let

// Integration test.  Doesn't just test total, also tests add.
// Tests things working together
test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1);

  // Redundant, covered above:
  add.mockImplementation(() => 30); // No reason to do this, but fudge that call to 30

  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2);
});
