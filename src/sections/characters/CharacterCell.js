import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native'

export default class CharacterCell extends Component {

    static defaultProps = {
        item        : {},
        onSelect    : () => {},
    }

    render() {

        const { item, onSelect } = this.props 
        console.log('characterCell item', item ? item : 'no hay item')
        const name = item.name ? item.name : ''
        const price = item.display_price ? item.display_price : ''
        const image = item.images ? { uri: item.images[0] } : require('ShoppingFever/src/resources/placeholder_product.jpg')

        return (
            <TouchableOpacity
                style={styles.image}
                onPress={ () => onSelect(item) }>

                <Image source={ image } resizeMode={'cover'} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name }</Text>
                    <Text style={styles.age}>{ price }</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    
    image: {
        width: Dimensions.get('window').width / 2 - 20, //857/600
        height: (Dimensions.get('window').width / 2 - 20) * (857/600),
    
        //        width: '100%',
        //height: 200,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
    },

    name: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    age: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'transparent',
    }
})

