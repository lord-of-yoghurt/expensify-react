import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DashboardPage = () => (
  <div>
    The Dashboard Page
  </div>
);

const AddExpensePage = () => (
  <div>
    Add expenses here
  </div>
);

const EditExpensesPage = () => (
  <div>
    Edit expenses
  </div>
);

const HelpPage = () => (
  <div>
    Not sure if we can help you yet...
  </div>
);

const NotFound = () => (
  <div>
    Four Oh Four...
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensesPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
