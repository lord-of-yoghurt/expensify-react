import reducer from '../../reducers/reducer_auth';
import * as co from '../../constants/auth';

test('sets the default state to an empty object', () => {
  const state = reducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({});
});

test('returns state with correct uid upon login', () => {
  const uid = 'abc123xyz';
  const action = {
    type: co.LOGIN,
    uid
  };
  const state = reducer({}, action);

  expect(state).toEqual({ uid });
});

test('wipes state upon logout', () => {
  const action = { type: co.LOGOUT };
  const state = reducer({ uid: 'some-weird-dude'}, action);

  expect(state).toEqual({});
});
