import React from 'react';
import numeral from 'numeral';
import pluralize from 'pluralize';
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses';

export const ExpenseListHeader = props => {
  const total = props.expenses.reduce((sum, obj) => {
    return sum + obj.amount;
  }, 0);
  const length = props.expenses.length;

  return (
    <div>
      <p>
        Showing { length } { pluralize('expense', length) } with the
        total amount of { numeral(total / 100).format('$0,0.00') }
      </p>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseListHeader);
