import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Renders the correct guess count', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<TopNav />)).to.equal(true);
    });
});

