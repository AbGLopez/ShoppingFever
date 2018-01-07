import React, {Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component {

    _gotScreen2() {
         Actions.screen2( { texto: 'Probamos que no ha sido suerte' })
    }

    render() {
        return (
            <View>
                <Text>
                    Welcome to Screen1 Motherfucker!
                </Text>
                <Text>{ this.props.texto }</Text>
                <Button
                    onPress={ () => this._gotScreen2() }
                    title=" A la pantalla 2"
                />
            </View>
        )
    }

}

