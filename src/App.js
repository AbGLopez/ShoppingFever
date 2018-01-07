import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import * as webservices from 'ShoppingFever/src/webservices/webservices'
import { Colors } from 'ShoppingFever/src/commons'

/****************** COMPONENTS *******************/
import HousesList from 'ShoppingFever/src/sections/houses/housesList/container'
import CharactersList from 'ShoppingFever/src/sections/characters/CharactersList'
import CharacterView from 'ShoppingFever/src/sections/characters/CharacterView'
import CharacterNew from 'ShoppingFever/src/sections/characters/CharacterNew'
import Cart from 'ShoppingFever/src/sections/cart/CartList'
/************************************************/


/****************** REDUX *******************/
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers' // Nuestros reducers
const reducer = combineReducers(reducers) // Combinamos nuestros reducers
const store = createStore( // Creamos el store con:
    reducer, // Nuestros reducer
    applyMiddleware(thunk) // Nuestro middleware redux-thunk
)
/*******************************************/



export default class App extends Component {

    componentWillMount() {
        webservices.configureAxios()
        StatusBar.setBarStyle('light-content') // iOS StatusBar light style
    }

    renderAddCharacterButton() {
        return (
            <TouchableOpacity style={styles.addButton} onPress={ () => Actions.CharacterNew() } >
                <Text style={styles.addButtonText}>{'Añadir'}</Text>
            </TouchableOpacity>
      
        )
    }
    renderCart() {
        return (
            <TouchableOpacity style={styles.addButton} onPress={ () => Actions.Cart() } >
                <Text style={styles.addButtonText}>{'Cart'}</Text>
            </TouchableOpacity>
      
        )
    }

    
    render() {
        console.disableYellowBox = true;
        
        return (
            <Provider store={store} >
                <Router>
                    <Scene key="root">

                        <Scene 
                            key={ 'HousesList' }
                            component={ HousesList }
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            renderRightButton={ () => this.renderCart() }
                            title={'ShoppingFever'}
                        />

                        <Scene
                            key={ 'CharactersList' }
                            component={ CharactersList }
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            renderRightButton={ () => this.renderAddCharacterButton() }
                            
                        />

                        <Scene 
                            key={ 'CharacterView' }
                            component={ CharacterView } 
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            renderRightButton={ () => this.renderCart() }

                        />

                        <Scene
                            key={ 'CharacterNew' }
                            component={ CharacterNew }
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            title={'Añadir'}
                        />
                        <Scene
                            key={ 'Cart' }
                            component={ Cart }
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            title={'Cart'}
                        />



                    </Scene>
                </Router>
            </Provider>
        );
    }

}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: Colors.navBar,
    },

    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

    addButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
