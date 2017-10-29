export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: SORT_BY_DATE
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

// SET_START_DATE
export const setStartDate = (startDate = null) => ({
  type: SET_START_DATE,
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate = null) => ({
  type: SET_END_DATE,
  endDate
});
