import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('renders ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('renders ExpenseListFilters with altered data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });

  expect(wrapper).toMatchSnapshot();
});

test('handles text change', () => {
  const value = 'coffee';
  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('handles sorting by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('handles sorting by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByAmount).toHaveBeenCalled()
});

test('handles date changes correctly', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handles date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
