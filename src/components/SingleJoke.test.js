import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import  { shallow, mount, render } from 'enzyme';
import { SingleJoke } from './SingleJoke';

configure({ adapter: new Adapter() });

describe('SingleJoke Tests', () => {
    it('renders the component without crashing', () => {
        const wrapper = shallow(<SingleJoke />);
    })
})
