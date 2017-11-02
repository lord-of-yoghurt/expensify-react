import * as co from '../constants/expenses';

// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case co.ADD_EXPENSE:
      return [...state, action.expense];
    case co.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case co.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
