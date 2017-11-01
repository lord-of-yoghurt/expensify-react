import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {amount}</p>
      <p>Created at: {createdAt}</p>
      <hr></hr>
    </div>
  );
};

export default ExpenseListItem;
