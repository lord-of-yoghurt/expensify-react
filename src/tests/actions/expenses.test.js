import {
  addExpense,
  editExpense,
  removeExpense,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE
} from '../../actions/expenses';

const testExpense = {
  description: 'rent',
  amount: '180000',
  note: 'i hate rent',
  createdAt: -61000
};

test('returns a valid addExpense action object with provided values', () => {
  const action = addExpense(testExpense);

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      ...testExpense,
      id: expect.any(String)
    }
  });
});

test('returns a valid addExpense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    }
  });
});

test('returns a valid editExpense action object', () => {
  const action = editExpense('some-id', testExpense);

  expect(action).toEqual({
    type: EDIT_EXPENSE,
    id: 'some-id',
    updates: testExpense
  });
});

test('returns a valid removeExpense action object', () => {
  const action = removeExpense({ id: 'some-id'});

  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    id: 'some-id'
  });
});
