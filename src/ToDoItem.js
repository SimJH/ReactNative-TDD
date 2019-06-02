import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    default: {
        backgroundColor: 'white'
    },
    completed: {
        backgroundColor: 'black'
    }
})

export default class ToDoItem extends Component {
    _onCompletedPress = () => {
        const { onCompleted, index } = this.props;
        onCompleted(index);
    }

    _onDeletePress = () => {
        const { onDeleted, index } = this.props;
        onDeleted(index);
    }

    render() {
        const { item } = this.props;

        return (
            <View style={item.completed ? styles.completed : styles.default}>
                <Text testID={item.completed ? "completed" : "uncompleted"}>{item.text}</Text>
                <Button testID="completedButton" title="Completed" onPress={this._onCompletedPress}></Button>
                <Button testID="deletedButton" title="Delete" onPress={this._onDeletePress}></Button>
            </View>
        )
    }
}