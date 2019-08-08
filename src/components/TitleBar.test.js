import { configure } from 'enzyme';
import React from 'react';
import { TitleBar } from './TitleBar';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


test('renders  a title bar with expected components', () => {
  const titlebar = render(<TitleBar />);
  expect(titlebar).toMatchSnapshot();
})

// Test Without Snapshot
test('renders the titlebar text', () => {
  const { getByText } = render(<TitleBar />);
  expect(getByText('Joke Norris')).toBeInTheDocument();
});
