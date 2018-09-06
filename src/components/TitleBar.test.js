import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { TitleBar } from './TitleBar';

configure({ adapter: new Adapter() });

describe('SingleJoke Tests', () => {
  it('renders the component without crashing', () => {
    const wrapper = shallow(<TitleBar />);
  });
  it('renders the expected header classes', () => {
    const wrapper = shallow(<TitleBar />);
    wrapper.find('div.ui.large.dividing.center.aligned.header');
  });
  it('renders the expected header image classes', () => {
    const wrapper = shallow(<TitleBar />);
    wrapper.find('img.ui.circular.centered.image');
  });
});
