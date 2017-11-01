import React from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = props => (
  <div>
    <h3>Add New Expense</h3>
    <Form
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpense);
