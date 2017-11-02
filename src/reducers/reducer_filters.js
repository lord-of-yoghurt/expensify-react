import moment from 'moment';

import * as co from '../constants/filters';

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case co.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case co.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      };
    case co.SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      };
    case co.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case co.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
