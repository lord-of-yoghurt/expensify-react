import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as expenseActions from '../../actions/expenses';
import * as co from '../../constants/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('returns a valid addExpense action object with provided values', () => {
  const action = expenseActions.addExpense(expenses[0]);

  expect(action).toEqual({
    type: co.ADD_EXPENSE,
    expense: expenses[0]
  });
});

test('adds an expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'snack',
    amount: 450,
    note: 'delicious and nutritious',
    createdAt: 1000
  };

  store.dispatch(expenseActions.startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: co.ADD_EXPENSE,
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
});

test('adds an expense with default values to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(expenseActions.startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: co.ADD_EXPENSE,
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
});

test('returns a valid editExpense action object', () => {
  const action = expenseActions.editExpense('some-id', expenses[1]);

  expect(action).toEqual({
    type: co.EDIT_EXPENSE,
    id: 'some-id',
    updates: expenses[1]
  });
});

test('returns a valid removeExpense action object', () => {
  const action = expenseActions.removeExpense({ id: 'some-id'});

  expect(action).toEqual({
    type: co.REMOVE_EXPENSE,
    id: 'some-id'
  });
});

test('sets up setExpenses action with data', () => {
  const action = expenseActions.setExpenses(expenses);

  expect(action).toEqual({
    type: co.SET_EXPENSES,
    expenses
  });
});

test('fetches expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(expenseActions.startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: co.SET_EXPENSES,
        expenses
      });
      done();
    });
});
