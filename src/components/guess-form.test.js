import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('should render a text input and button', () => {
        const wrapper = shallow(<GuessForm />);
        expect(wrapper.find('#userGuess')).to.have.length(1);
        expect(wrapper.find('#guessButton')).to.have.length(1);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 5;
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
});


