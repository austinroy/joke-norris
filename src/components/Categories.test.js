import React from 'react';
import { Categories } from './Categories';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const props = {
  fetchCategories: jest.fn(),
  loading: false,
  categories: [
    'explicit',
    'dev',
    'movie',
    'food',
    'celebrity',
    'science',
    'sport',
    'political',
    'religion',
    'animal',
    'history',
    'music',
    'travel',
    'career',
    'money',
    'fashion'
  ]
};

afterEach(cleanup);

const propsLoading = {
  fetchCategories: jest.fn(),
  loading: true
};

test('renders category cards', () => {
  const container = render(<Categories {...props} />);
  expect(container).toMatchSnapshot();
});

test('renders a loader', () => {
  const container = render(<Categories {...propsLoading} />);
  expect(container).toMatchSnapshot();
});

// Test Without Snapshot
test('renders the titlebar text', () => {
  const { getByText } = render(<Categories {...props} />);
  expect(getByText('Categories')).toBeInTheDocument();
  expect(
    getByText('Chuck Norris demands you choose a category')
  ).toBeInTheDocument();
  fireEvent.click(getByText('dev'));
  expect(props.fetchCategories).toHaveBeenCalled();
});
