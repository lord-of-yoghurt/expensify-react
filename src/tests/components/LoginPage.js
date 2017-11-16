import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../../components/LoginPage';

test('renders the LoginPage component correctly', () => {
  const wrapper = shallow(<LoginPage />);

  expect(wrapper.toMatchSnapshot());
});
