import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './calculator';

it('expect quote to match snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
