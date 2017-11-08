import uuid from 'uuid';

import * as co from '../constants/expenses';

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
   } = {}
) => ({
  type: co.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: co.REMOVE_EXPENSE,
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: co.EDIT_EXPENSE,
  id,
  updates
});
