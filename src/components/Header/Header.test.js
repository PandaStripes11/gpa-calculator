import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Header from "./Header";
import logoImage from '@assets/logo.svg';

describe("<Header/>", () => {
    test('matches snapshot', () => {
        const component = renderer.create(<Header/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    const header = shallow(<Header/>);
    test('has title of GPA Calculator', () => {
        expect(header.find('.title').text()).toEqual('GPA Calculator');
    });
    describe("logo", () => {
        const logo = header.find('.logo');
        test('renders an image with .logo className', () => {
            expect(logo.exists()).toBeTruthy();
        });
        test('has an alt attribute', () => {
            expect(logo.prop('alt')).toEqual('logo');
        });
        test('uses the logo.svg', () => {
            expect(logo.prop('src')).toEqual(logoImage);
        });
    }); 
});