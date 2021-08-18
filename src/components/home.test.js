import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';

it('expect quote to match snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
