import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as expenseActions from '../../actions/expenses';
import * as co from '../../constants/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'abc123xyz';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

/*
*** TEST ADDING EXPENSES
 */

test('returns a valid addExpense action object with provided values', () => {
  const action = expenseActions.addExpense(expenses[0]);

  expect(action).toEqual({
    type: co.ADD_EXPENSE,
    expense: expenses[0]
  });
});

test('adds an expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
});

test('adds an expense with default values to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
});

/*
*** TEST FETCHING EXPENSES
 */

test('sets up setExpenses action with data', () => {
  const action = expenseActions.setExpenses(expenses);

  expect(action).toEqual({
    type: co.SET_EXPENSES,
    expenses
  });
});

test('fetches expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
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

/*
*** TEST EDITING EXPENSES
 */

test('returns a valid editExpense action object', () => {
  const action = expenseActions.editExpense('some-id', expenses[1]);

  expect(action).toEqual({
    type: co.EDIT_EXPENSE,
    id: 'some-id',
    updates: expenses[1]
  });
});

test('updates an expense on firebase', (done) => {
  const store = createMockStore(defaultAuthState),
        id = expenses[2].id,
        updates = {
          amount: 1499,
          note: 'added family subscription'
        };

  store.dispatch(expenseActions.startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: co.EDIT_EXPENSE,
        id,
        updates
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      const data = snapshot.val();

      expect(data.amount).toBe(1499);
      expect(data.note).toBe('added family subscription');

      done();
    });
});

/*
*** TEST REMOVING EXPENSES
 */

test('returns a valid removeExpense action object', () => {
  const action = expenseActions.removeExpense({ id: 'some-id'});

  expect(action).toEqual({
    type: co.REMOVE_EXPENSE,
    id: 'some-id'
  });
});

test('removes an expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;

  store.dispatch(expenseActions.startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: co.REMOVE_EXPENSE,
        id
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBe(null);
      done();
    });
});
