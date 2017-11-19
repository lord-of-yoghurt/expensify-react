import React from 'react';
import { shallow } from 'enzyme';

import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpense startAddExpense={startAddExpense} history={history} />
  );
});

test('renders AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handles onSubmit correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);

  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2]);
});
