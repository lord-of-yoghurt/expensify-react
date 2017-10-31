// React dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ReactRouter dependencies
import AppRouter from './routers/AppRouter';

// react-redux dependencies
import { Provider } from 'react-redux';

// redux imports
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// style imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState(),
        visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  // console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Electric bill', amount: 500, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Phone bill', amount: 1300, createdAt: 12000 }));
store.dispatch(addExpense({ description: 'Lunch', amount: 1000, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Coke Zero', amount: 800, createdAt: -60000 }));

// setTimeout(() => {
//   store.dispatch(setTextFilter())
// }, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
