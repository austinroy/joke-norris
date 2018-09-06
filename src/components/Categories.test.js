import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { Categories } from './Categories';

configure({ adapter: new Adapter() });

const props = {
  fetchCategories: jest.fn(),
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

const propsLoading = {
  fetchCategories: jest.fn(),
  loading: true
};

describe('Category Tests', () => {
  it('renders the component without crashing', () => {
    const wrapper = shallow(<Categories {...props} />);
  });
  it('renders a category card', () => {
    const wrapper = shallow(<Categories {...props} />);
    wrapper.find('div.categories__Card');
  });
  it('renders the loader when expected', () => {
    const wrapper = shallow(<Categories {...propsLoading} />);
    wrapper.find('ui.loader');
  });
});
