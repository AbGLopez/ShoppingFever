import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import CategoryList from './sections/ProductsCategory/CategoryList';
//import Screen2 from './sections/Screen2';


export default class App extends Component {

  render() {
    //const menu = '<Text>hola</Text>'

    return (
        <Router>
          <Scene key="root">
            <Scene
              key={'CategoryList'}
              component={ CategoryList }
            />

          </Scene>

        </Router>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
