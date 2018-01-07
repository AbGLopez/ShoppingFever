import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from 'ShoppingFever/src/widgets' 
import { Colors } from 'ShoppingFever/src/commons'

// Redux
import { connect } from  'react-redux'
import * as CharactersActions from 'ShoppingFever/src/redux/actions/characters'
import * as CartActions from 'ShoppingFever/src/redux/actions/cart'

class CharacterView extends Component {

    onDelete(character) {
        this.props.deleteCharacter(character)
    }

    onAddToCart(product) {
        this.props.addToCartProduct(product)
    }


    render() {
        const { character } = this.props
        console.log('vista de producto,', character ? character : 'aun no')
        const name = character ? character.name : ''
        const display_price = character ? character.display_price : ''
        const image = character && character.images[0] ? { uri: character.images[0] } : require('ShoppingFever/src/resources/placeholder.png')

        return (
            <View style={styles.container}>

                <Image source={image} style={styles.image} resizeMode={'cover'} /> 
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name }</Text>
                    <Text style={styles.edad}>{ 'Precio: ' + display_price }</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button label={'Eliminar'} onPress={ () => this.onDelete(character) } isFetching={this.props.isFetching} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button label={'Comprar'} onPress={ () => this.onAddToCart(character) } isFetching={this.props.isFetching} />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCharacter: (character) => {
            character && dispatch(CharactersActions.deleteCharacter(character))
        },

        addToCartProduct: (character) => {
            console.log('product', character);
            character && dispatch(CartActions.postCart(character))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView)

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },

    name: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },

    edad: {
        fontSize: 16,
        color: 'white',
    },

    image: {
        width: '100%',
        height: 200,
    },

    buttonContainer: {
        margin: 20,

    },
});
