import React from 'react';
import numeral from 'numeral';
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseListHeader = (props) => {
  const total = selectExpensesTotal(props.expenses);
  const length = props.expenses.length;

  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Showing <span>{ length }</span> { pluralize('expense', length) } with the
          total amount of <span>{ numeral(total / 100).format('$0,0.00') }</span>
        </h2>
        <div className="page-header__actions">
          <Link className="app-button" to="/create">New Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseListHeader);
