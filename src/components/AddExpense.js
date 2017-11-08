import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// after
export class AddExpense extends Component {
  onSubmit = expense => {
    this.props.addExpense(expense);
    this.props.history.push('/');
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
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpense);
