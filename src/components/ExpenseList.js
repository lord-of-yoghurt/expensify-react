// necessary imports
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// unconnected dumb component
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses yet - go ahead and add some!</p>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )
    }
  </div>
);

// grab the necessary piece of state from the store
const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

// upgrade the dumb component to a HOC by connecting
// it to the store using react-redux
export default connect(mapStateToProps)(ExpenseList);
