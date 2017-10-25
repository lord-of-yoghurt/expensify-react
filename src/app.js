import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

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
    Four Oh Four... <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Enter expenses</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit expenses</NavLink>
    <NavLink to="/help" activeClassName="is-active">Haaaaaalp!</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensesPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
