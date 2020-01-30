import React from 'react';
import { render } from '@testing-library/react';
import ListEntry from '../containers/restaurant-list/ListEntry';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from '@material-ui/core';
import RestaurantList from '../containers/restaurant-list/RestaurantList';

Enzyme.configure({ adapter: new Adapter() });

describe('RestaurantList', () => {
  test('Renders 50 ListEntry elements', () => {
    const wrapper = shallow(
      <RestaurantList />
    );
    expect(wrapper.find(ListEntry)).toHaveLength(50);
  });
});
