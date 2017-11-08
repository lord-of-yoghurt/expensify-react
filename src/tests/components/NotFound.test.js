import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

test('renders the 404 page correctly', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});
