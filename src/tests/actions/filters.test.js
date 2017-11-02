import moment from 'moment';

import * as co from '../../constants/filters';

import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

const testDate = moment(0);

test('generates setStartDate action object', () => {
  const action = setStartDate(testDate);

  expect(action).toEqual({
    type: co.SET_START_DATE,
    startDate: testDate
  });
});

test('generates setEndDate action object', () => {
  const action = setEndDate(testDate);

  expect(action).toEqual({
    type: co.SET_END_DATE,
    endDate: testDate
  });
});

test('generates sortByAmount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: co.SORT_BY_AMOUNT
  });
})

test('generates sortByDate action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: co.SORT_BY_DATE
  });
})

test('generates setTextFilter action to clear text filter', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: co.SET_TEXT_FILTER,
    text: ""
  });
});

test('generates setTextFilter action to set new filter', () => {
  const action = setTextFilter('coffee');

  expect(action).toEqual({
    type: co.SET_TEXT_FILTER,
    text: 'coffee'
  });
});
