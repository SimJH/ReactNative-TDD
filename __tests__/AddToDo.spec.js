import 'react-native';
import React from 'react';
import AddToDo from '../src/AddToDo';
import { shallow } from 'enzyme';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddToDo></AddToDo>)
    })

    it('is TextInput visible?', () => {
        expect(wrapper.find('TextInput')).toHaveLength(1);
    })

    it('is Button visible?', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    })
})

describe('Interaction', () => {
    let wrapper;
    let props;
    const text = "some ToDo";

    beforeEach(() => {
        props = {
            onAdded: jest.fn()
        }

        wrapper = shallow(<AddToDo {...props}></AddToDo>)

        wrapper.find('TextInput').simulate('changeText', 'some ToDo');
        wrapper.find('Button').prop('onPress')(); // Button Click Event
    })

    it('should call the on Added callback with input text', () => {
        expect(props.onAdded).toHaveBeenCalledTimes(1);
        expect(props.onAdded).toHaveBeenCalledWith(text)
    })
})
