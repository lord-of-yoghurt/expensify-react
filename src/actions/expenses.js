import uuid from 'uuid';
import database from '../firebase/firebase';

import * as co from '../constants/expenses';

// ADD_EXPENSE (redux store)
export const addExpense = expense => ({
  type: co.ADD_EXPENSE,
  expense
});

// async action to communicate with firebase and add expense
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense)
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: co.EDIT_EXPENSE,
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: co.SET_EXPENSES,
  expenses
});

// 1. async action - returns a function
// 2. function does the following:
//    - fetch the data under 'expenses' in the DB
//    - upon successful completion (then), take the
//      snapshot and iterate over it using for each.
//      each child snapshot gets pushed to expenses
//      array as an object, with the id received from
//      the key property, and the rest of is spread
//      from what comes back from val().
//    - in the end, dispatch the regular setExpenses
//      action, where the new state is simply the
//      resulting expenses array.
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((child) => {
          expenses.push({
            id: child.key,
            ...child.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  }
};
