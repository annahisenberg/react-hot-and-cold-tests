import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback/>', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback feedback="hot" />);
    });

    it('Renders the text', () => {
        const feedback = "Hot";
        const wrapper = shallow(<Feedback feedback={feedback} />);
        expect(wrapper.text()).toEqual(feedback);
    });
});