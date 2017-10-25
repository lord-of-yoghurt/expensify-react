import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';
import EditExpenses from '../components/EditExpenses';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={EditExpenses} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
