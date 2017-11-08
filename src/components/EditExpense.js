import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveClick = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Form
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemoveClick}>
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
