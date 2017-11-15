import uuid from 'uuid';
import database from '../firebase/firebase';

import * as co from '../constants/expenses';

// ADD_EXPENSE
export const addExpense = expense => ({
  type: co.ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense)
      .then(ref => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

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
