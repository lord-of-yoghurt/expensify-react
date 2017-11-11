import selectExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('returns 0 for empty expenses array', () => {
  const total = selectExpensesTotal([]);

  expect(total).toBe(0);
})

test('calculates total for one expense correctly', () => {
  const total = selectExpensesTotal([expenses[0]]);

  expect(total).toBe(100);
});

test('calculates total for more than one expense correctly', () => {
  const total = selectExpensesTotal(expenses);

  expect(total).toBe(2599);
});
