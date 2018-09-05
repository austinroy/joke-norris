import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import  { shallow, mount, render } from 'enzyme';
import { Categories } from './Categories';

configure({ adapter: new Adapter() });

describe('Category Tests', () => {
    it('renders the component without crashing', () => {
        const wrapper = shallow(<Categories />);
    })
})
