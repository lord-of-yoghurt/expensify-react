import React from 'react';

import ExpenseListHeader from './ExpenseListHeader';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
  <div>
    <ExpenseListHeader />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
