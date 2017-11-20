// necessary imports
import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// unconnected dumb component
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses yet - go ahead and add some!</span>
          </div>
        ) : (
          props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )
      }
    </div>
  </div>
);

// grab the necessary piece of state from the store
const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

// upgrade the dumb component to a HOC by connecting
// it to the store using react-redux
export default connect(mapStateToProps)(ExpenseList);
