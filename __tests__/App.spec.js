import 'react-native';
import React from 'react';
import App from '../App';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>)
  it('is Text visible?', () => {
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  })

  it('is AddToDo visible?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  })

  it('is ToDoList visible?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  })
})

// describe('Jest', () => {
//   it('is it working?', () => {
//     const a = 1;
//     expect(a + 1).toBe(2)
//   })
// })

// describe('Enzyme', () => {
//   it('is it working?', () => {
//     const text = 'some text';
//     const wrapper = shallow(<Text>{text}</Text>);
//     expect(wrapper.text()).toBe(text);
//   })
// })
