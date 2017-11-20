import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };

  onRemoveClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense - <span>{this.props.expense.description}</span></h2>
          </div>
        </div>
        <div className="content-container">
          <Form
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            canRemove={true}
            removeExpense={this.onRemoveClick}
          />
          {/* <button className="app-button--form" onClick={this.onRemoveClick}>
            Remove
          </button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
