import React from 'react';
import { Categories } from './Categories';
import { render, cleanup } from '@testing-library/react';

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
