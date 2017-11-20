import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// after
export class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add New Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <Form
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(null, mapDispatchToProps)(AddExpense);
