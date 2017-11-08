import moment from 'moment';

import selectExpenses from '../../selectors/expenses';

import expenses from '../fixtures/expenses';

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

test('returns an array of expenses filtered by text value', () => {
  const filters = {
    ...defaultFilters,
    text: 't'
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('returns an array of expenses filtered by start date', () => {
  const filters = {
    ...defaultFilters,
    startDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('returns an array of expenses filtered by end date', () => {
  const filters = {
    ...defaultFilters,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('returns an array of expenses sorted by date', () => {
  const result = selectExpenses(expenses, defaultFilters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('returns an array of expenses sorted by amount', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'amount'
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
