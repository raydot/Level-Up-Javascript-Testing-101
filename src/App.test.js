import { add, total } from './App';

// Test, does it work?
console.log(add(1, 2));

// test('Fake Test', () => {
//   // Assertion -- asserting something is one way.
//   expect(true).toBeTruthy();
// });

// Unit test
// Only tests one thing
test('add', () => {
  // Some basic assertions
  const value = add(1, 2);
  expect(value).toBe(3); // Unit tests: only tests one thing
  expect(add(5, 2)).toBe(7);
});

// Integration test.  Doesn't just test total, also tests add.
test('total', () => {
  expect(total(5, 20)).toBe('$25');
});
