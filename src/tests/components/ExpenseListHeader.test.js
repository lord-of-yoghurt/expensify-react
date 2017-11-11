import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListHeader } from '../../components/ExpenseListHeader';
import expenses from '../fixtures/expenses';

test('renders the component correctly', () => {
  const wrapper = shallow(<ExpenseListHeader expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test('singularizes `expense` when there\'s just one', () => {
  const wrapper = shallow(<ExpenseListHeader expenses={[expenses[0]]} />);

  expect(wrapper).toMatchSnapshot();
});
