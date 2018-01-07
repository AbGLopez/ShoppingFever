import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native'

export default class CartCell extends Component {

    static defaultProps = {
        item        : {},
        onSelect    : () => {},
    }

    render() {

        const { item, onSelect } = this.props 

        const nombre = item.nombre ? item.nombre : ''
        const edad = item.edad ? item.edad : ''
        const image =  require('ShoppingFever/src/resources/placeholder_product.jpg')

        return (
            <TouchableOpacity
                style={styles.image}
                onPress={ () => onSelect(item) }>
                <Image source={ image } resizeMode={'contain'} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}> Producto</Text>
                    <Text style={styles.age}>Precio</Text>
                </View>

            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },

    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    age: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'transparent',
    }
})

