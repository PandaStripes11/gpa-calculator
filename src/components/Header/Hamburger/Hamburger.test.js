import React from 'react';
import { shallow } from 'enzyme';

import Hamburger from './Hamburger';

describe('<Hamburger/>', () => {
    const wrapper = shallow(<Hamburger/>);
    test('has a div with class .hamburger-menu', () => {
        expect(wrapper.find('.hamburger-menu').exists).toBeTruthy();
    })
});