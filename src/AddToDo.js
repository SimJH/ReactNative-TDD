import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class AddToDo extends Component {
    state = {
        text: ''
    }

    _onChangeText = (text) => {
        this.setState({ text });
    }
    _onPress = () => {
        const { onAdded } = this.props;
        onAdded(this.state.text);
    }
    render() {
        return (
            <View>
                <TextInput testID="textInput" onChangeText={this._onChangeText}></TextInput>
                <Button testID="addButton" title="Add" onPress={this._onPress}></Button>
            </View>
        )
    }
}