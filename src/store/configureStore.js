import { createStore, applyMiddleware, compose } from 'redux'; // 1
import thunk from 'redux-thunk'; // 2

import root from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 3

export default () => {
  const store = createStore(
    root,
    composeEnhancers(applyMiddleware(thunk)) // 4
  );

  return store;
};
