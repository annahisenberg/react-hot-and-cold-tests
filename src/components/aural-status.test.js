import React from 'react';
import { shallow } from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus auralStatus="status" />);
    });

    it('Renders the text', () => {
        const text = "status";
        const wrapper = shallow(<AuralStatus auralStatus={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});