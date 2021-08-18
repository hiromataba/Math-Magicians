import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './navbar';

it('expect quote to match snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
