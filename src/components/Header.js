import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Enter expenses</NavLink>
    <NavLink to="/help" activeClassName="is-active">Haaaaaalp!</NavLink>
    <button onClick={startLogout}>Sign out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
