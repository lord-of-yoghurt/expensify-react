import { createStore } from 'redux';

import root from '../reducers/index';

export default () => {
  const store = createStore(root);

  return store;
};
