import reducer from '../../reducers/reducer_expenses';
import * as co from '../../constants/expenses';
import expenses from '../fixtures/expenses';

test('sets the default state to empty array', () => {
  const state = reducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('removes expense by id', () => {
  const action = {
    type: co.REMOVE_EXPENSE,
    id: expenses[1].id
  };

  const state = reducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('keeps state the same if id not found', () => {
  const action = {
    type: co.REMOVE_EXPENSE,
    id: '-1'
  };

  const state = reducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('handles adding an expense', () => {
  const expense = {
    amount: 100,
    description: 'coffee',
    note: '',
    createdAt: 1500
  };

  const action = {
    type: co.ADD_EXPENSE,
    expense
  };

  const state = reducer(expenses, action);

  expect(state[3].description).toBe('coffee');
});

test('handles editing an existing expense', () => {
  const action = {
    type: co.EDIT_EXPENSE,
    id: expenses[1].id,
    updates: { note: 'no regrets' }
  };

  const state = reducer(expenses, action);

  expect(state[1].note).toBe('no regrets');
});

test('returns the same state if id not found', () => {
  const action = {
    type: co.EDIT_EXPENSE,
    id: -1,
    updates: { amount: 10000000 }
  };

  const state = reducer(expenses, action);

  expect(state).toEqual(expenses);
});
