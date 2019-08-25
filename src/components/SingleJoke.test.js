import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SingleJoke } from './SingleJoke';

afterEach(cleanup);

const props = {
  fetchJoke: jest.fn(),
  loading: false,
  joke: 'Chuck Norris writes code that optimizes itself.',
  match: {
    params: {
      category: 'dev'
    }
  }
};

const propsFailed = {
  fetchJoke: jest.fn(),
  loading: true,
  match: {
    params: {
      category: 'dev'
    }
  }
};

test('renders the expected joke', () => {
  const container = render(<SingleJoke {...props} />);
  expect(container).toMatchSnapshot();
});

test('renders joke failure ui joke is not loaded', () => {
  const container = render(<SingleJoke {...propsFailed} />);
  expect(container).toMatchSnapshot();
});

// Test Without Snapshot
test('renders the next joke button', () => {
  const container = render(<SingleJoke {...props} />);
  const { getByText } = container;
  expect(getByText('Next')).toBeInTheDocument();
  expect(props.fetchJoke).toHaveBeenCalled();
});
