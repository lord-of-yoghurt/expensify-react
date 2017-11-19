import { combineReducers } from 'redux';

import expenses from './reducer_expenses';
import filters from './reducer_filters';
import auth from './reducer_auth';

export default combineReducers({
  expenses,
  filters,
  auth
});
