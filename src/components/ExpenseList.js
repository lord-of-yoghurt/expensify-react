// necessary imports
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

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

// grabbing the necessary piece of state from the store
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// upgrading the dumb component to a HOC by connecting
// it to the store using react-redux
export default connect(mapStateToProps)(ExpenseList);
