import { combineReducers } from 'redux';

import expenses from './reducer_expenses';
import filters from './reducer_filters';

export default combineReducers({
  expenses,
  filters
});
