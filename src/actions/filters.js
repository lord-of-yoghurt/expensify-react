import * as co from '../constants/filters';

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: co.SET_TEXT_FILTER,
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: co.SORT_BY_DATE
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: co.SORT_BY_AMOUNT
});

// SET_START_DATE
export const setStartDate = (startDate = null) => ({
  type: co.SET_START_DATE,
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate = null) => ({
  type: co.SET_END_DATE,
  endDate
});
