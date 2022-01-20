import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe("navigation", () => {
    const navigation = shallow(<Navigation/>);
    test("has four links", () => {
        expect(navigation.children()).toHaveLength(4);
    });
});