import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { SingleJoke } from './SingleJoke';

configure({ adapter: new Adapter() });

const props = {
  fetchJoke: jest.fn(),
  match: {
    params: {
      category: 'dev'
    }
  }
};

describe('SingleJoke Tests', () => {
  it('renders the component without crashing', () => {
    const wrapper = shallow(<SingleJoke {...props} />);
  });
  it('renders the joke', () => {
    const wrapper = shallow(<SingleJoke {...props} />);
    wrapper.find('joke');
  });
  it('renders the category ribbon', () => {
    const wrapper = shallow(<SingleJoke {...props} />);
    wrapper.find('ui.ribbon');
  });
  it('renders the next ribbon', () => {
    const wrapper = shallow(<SingleJoke {...props} />);
    wrapper.find('ui.button.positive.teal');
  });
  it('renders the next ribbon', () => {
    const wrapper = shallow(<SingleJoke {...props} />);
    wrapper.find('ui.button.primary.teal');
  });
});
