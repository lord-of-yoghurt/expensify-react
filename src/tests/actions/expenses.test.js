import * as expenseActions from '../../actions/expenses';
// import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import * as co from '../../constants/expenses';

const testExpense = {
  description: 'rent',
  amount: '180000',
  note: 'i hate rent',
  createdAt: -61000
};

test('returns a valid addExpense action object with provided values', () => {
  const action = expenseActions.addExpense(testExpense);

  expect(action).toEqual({
    type: co.ADD_EXPENSE,
    expense: {
      ...testExpense,
      id: expect.any(String)
    }
  });
});

test('returns a valid addExpense action object with default values', () => {
  const action = expenseActions.addExpense();

  expect(action).toEqual({
    type: co.ADD_EXPENSE,
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
  const action = expenseActions.editExpense('some-id', testExpense);

  expect(action).toEqual({
    type: co.EDIT_EXPENSE,
    id: 'some-id',
    updates: testExpense
  });
});

test('returns a valid removeExpense action object', () => {
  const action = expenseActions.removeExpense({ id: 'some-id'});

  expect(action).toEqual({
    type: co.REMOVE_EXPENSE,
    id: 'some-id'
  });
});
