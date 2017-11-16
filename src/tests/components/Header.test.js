import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('renders the header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('calls startLogout correctly', () => {
  wrapper.find('button').simulate('click');

  expect(startLogout).toHaveBeenCalled();
});
