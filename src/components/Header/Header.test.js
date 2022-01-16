import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe("<Header/>", () => {
    const header = shallow(<Header/>)
    test('has title of GPA Calculator', () => {
        expect(header.find('#title').text()).toEqual('GPA Calculator');
    });
    test('renders a .logo', () => {
        expect(header.find('.logo').exists()).toBeTruthy();
    });
});