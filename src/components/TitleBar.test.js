import { configure } from 'enzyme';
import React from 'react';
import { TitleBar } from './TitleBar';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);


test('renders  a title bar with expected components', () => {
  const titlebar = render(<TitleBar />);
  expect(titlebar).toMatchSnapshot();
})
