import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// after
export class AddExpense extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h3>Add New Expense</h3>
        <Form
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpense);
