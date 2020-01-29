import React from 'react';
import { render } from '@testing-library/react';
import ListEntry from '../containers/restaurant-list/ListEntry';
import { mount } from 'enzyme';

const mockRestaurant = { image: '' };

test('renders learn react link', () => {
  const wrapper = mount(
    <ListEntry restaurant={mockRestaurant} />
  );
  expect(wrapper.find('TextField')).length.toBe(3);
});
