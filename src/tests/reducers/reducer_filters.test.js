import moment from 'moment';

import * as co from '../../constants/filters';
import reducer from '../../reducers/reducer_filters';

const startingState = {
  text: '',
  startDate: null,
  endDate: null,
  sortBy: ''
};

test('sets up default filter values', () => {
  const state = reducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('sets sortBy to amount', () => {
  const state = reducer(undefined, { type: co.SORT_BY_AMOUNT });

  expect(state.sortBy).toBe('amount');
});

test('sets sortBy to date', () => {
  const state = reducer(
    { ...startingState, sortBy: 'date'},
    { type: co.SORT_BY_DATE }
  );

  expect(state.sortBy).toBe('date');
});

test('sets the text filter', () => {
  const state = reducer(
    undefined,
    { type: co.SET_TEXT_FILTER, text: 'coffee' }
  );

  expect(state.text).toBe('coffee');
});

test('sets the startDate filter', () => {
  const state = reducer(
    undefined,
    { type: co.SET_START_DATE, startDate: 0 }
  );

  expect(state.startDate).toBe(0);
});

test('sets the endDate filter', () => {
  const state = reducer(
    undefined,
    { type: co.SET_END_DATE, endDate: 0 }
  );

  expect(state.endDate).toBe(0);
});
