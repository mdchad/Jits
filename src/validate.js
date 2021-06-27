import vest, { test, enforce } from 'vest';

export default vest.create((data = {}, currentField) => {
  vest.only(currentField);

  test('address', 'Address is required', () => {
    enforce(data.username).isNotEmpty();
  });

  test('address', 'Address is too short', () => {
    enforce(data.username).longerThanOrEquals(3);
  });
});
