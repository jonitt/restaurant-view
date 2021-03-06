import React from 'react';
import { render } from '@testing-library/react';
import ListEntry from '../containers/restaurant-list/ListEntry';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

const mockRestaurant = { image: '' };

describe('ListEntry', () => {
  test('Renders 3 Typography elements', () => {
    const wrapper = shallow(
      <ListEntry restaurant={mockRestaurant} />
    );
    expect(wrapper.find(Typography)).toHaveLength(3);
  });
});
