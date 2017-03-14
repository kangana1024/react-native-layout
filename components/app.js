import React, { Component } from 'react';
import {
    StyleSheet,
    LayoutAnimation,
    Text,
    View
} from 'react-native';

export default class App extends Component {
    componentWillUpdate(nextProps,nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection:'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                backgroundColor: '#F5FCFF'
            }}>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'red'
                }} />
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'blue'
                }} />
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'green'
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});