import React from 'react';
import { shallow } from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSectino />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={[]} auralStatus="" />);
    });
});