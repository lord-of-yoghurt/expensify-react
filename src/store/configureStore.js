import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import root from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    root,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
