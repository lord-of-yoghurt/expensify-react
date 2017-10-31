import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('dddd, MMM. D, YYYY [at] h:mm A'));

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
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

    // the input in the field will change only if the above regex
    // is matched - otherwise, characters won't even appear
    if (amount.match(re)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
