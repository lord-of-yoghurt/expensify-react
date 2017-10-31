// necessary imports
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// unconnected dumb component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    }
  </div>
);

// grab the necessary piece of state from the store
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// upgrade the dumb component to a HOC by connecting
// it to the store using react-redux
export default connect(mapStateToProps)(ExpenseList);
