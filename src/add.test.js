import { add } from './add';

// Unit test
// Unit tests only test one thing
test('add', () => {
  // Some basic assertions
  const value = add(1, 2);
  expect(value).toBe(3); // Unit tests: only tests one thing
  //expect(add).toHaveBeenCalledTimes(1); // can't call without spy!
  //expect(add).toHaveBeenCalledWith(1, 2); // can't call without spy!
  expect(add(5, 2)).toBe(7);
});

// We'll get an error that add much be a mock function or a spy.
