import { createStore } from 'redux';

import root from '../reducers/index';

export default () => {
  const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
