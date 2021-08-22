import vest, { test, enforce } from 'vest';

export default vest.create((data = {}, currentField) => {
  vest.only(currentField);

  test('address', 'Address is required', () => {
    enforce(data.address).isNotEmpty();
  });

  test('address', 'Address is too short', () => {
    enforce(data.address).longerThanOrEquals(3);
  });

  // test('email', 'Email is required', () => {
  //   enforce(data.email).isNotEmpty();
  // })
});
