import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    // start with any number of digits, have an optional group of
    // "decimal point and another two digits" at the end
    const re = /^\d*(\.\d{0,2})?$/;

    if (amount.match(re)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Optional note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Expensify!</button>
        </form>
      </div>
    );
  };
}
