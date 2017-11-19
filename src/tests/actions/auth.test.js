import * as co from '../../constants/auth';
import { login, logout } from '../../actions/auth';

test('generates login action object', () => {
  const action = login('abc123xyz');

  expect(action).toEqual({
    type: co.LOGIN,
    uid: 'abc123xyz'
  });
});

test('generates logout action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: co.LOGOUT
  });
});
