import React from 'react';
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
