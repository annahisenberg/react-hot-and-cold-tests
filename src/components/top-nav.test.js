import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('should render three lis', () => {
        const wrapper = shallow(<TopNav />);
        expect(wrapper.find('ul').children()).to.have.length(3);
    });

    it('Should fire the "onRestartGame" callback when the li is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('Should fire the "onGenerateAuralUpdate" callback when the li is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        wrapper.find('.visuallyhidden').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

});
