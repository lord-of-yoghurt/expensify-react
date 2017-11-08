import React from 'react';
import { shallow } from 'enzyme';

import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test('renders EditExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handles editing an expense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('handles removing an expense correctly', () => {
  wrapper.find('button').simulate('click');

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
