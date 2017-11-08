import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('renders ExpenseList with expenses via props', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test('renders a notification if there\'s no expenses to display', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
