import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import Form from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('renders the form correctly', () => {
  const wrapper = shallow(<Form />);

  expect(wrapper).toMatchSnapshot();
});

test('renders the form with expense data', () => {
  const wrapper = shallow(<Form expense={expenses[2]} />);

  expect(wrapper).toMatchSnapshot();
});

test('shows an error message for invalid form submission', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('sets description on input change', () => {
  const value = 'Some description';
  const wrapper = shallow(<Form />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('description')).toBe(value);
});

test('sets note on textarea change', () => {
  const value = 'Test note';
  const wrapper = shallow(<Form />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });

  expect(wrapper.state('note')).toBe(value);
});

test('sets amount if given valid data', () => {
  const value = '123.45';
  const wrapper = shallow(<Form />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('doesn\'t change the amount when given invalid data', () => {
  const value = '12.345';
  const wrapper = shallow(<Form />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe('');
});

test('calls onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <Form expense={expenses[1]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt
  });
});

test('sets new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<Form />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);

  expect(wrapper.state('createdAt')).toEqual(now);
});

test('sets the focus on the date picker correctly', () => {
  const focused = true;
  const wrapper = shallow(<Form />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });

  expect(wrapper.state('calendarFocused')).toBe(focused);
});
