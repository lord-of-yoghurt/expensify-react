import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
      <p>Created: {moment(createdAt).format('MMMM Do, YYYY')}</p>
      <hr></hr>
    </div>
  );
};

export default ExpenseListItem;
