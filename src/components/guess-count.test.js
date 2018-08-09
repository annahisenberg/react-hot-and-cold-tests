import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
        const guessCount = 9;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(guessCount);
    });
});

