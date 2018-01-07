import React, {Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends Component {
    render() {
        console.log('pepe', this.props);
        return (
            <View>
                <Text>
                    Welcome to Screen2!
                </Text>
                <Text>{ this.props.texto }</Text>
                <Button
                    onPress={ () => Actions.pop() }
                    title=" Volver Atras"
                    />
            </View>
        )
    }

}

