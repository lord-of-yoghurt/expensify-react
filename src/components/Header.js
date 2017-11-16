import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Enter expenses</NavLink>
    <NavLink to="/help" activeClassName="is-active">Haaaaaalp!</NavLink>
  </header>
);

export default Header;
