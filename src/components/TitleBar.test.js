import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import TitleBar from './TitleBar';

configure({ adapter: new Adapter() });

describe('TitleBAr Tests', () => {
  it('renders the title bar without crashing', () => {
    const wrapper = shallow(<TitleBar />);
  });
});
