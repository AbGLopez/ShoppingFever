import React, { Component } from 'react'
import { Platform, TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native'

export default class HousesCell extends Component {
    
    // Propiedades por defecto, sirven para prevenir fallos y para documentar el componente
    static defaultProps = {
        onSelect    : () => {},
        item        : {},
    }

    render() {
        const { item, onSelect } = this.props
        
        const image = item.image_url ? { uri: item.image_url } : require('ShoppingFever/src/resources/placeholder_product.jpg')
    
        return (
            <TouchableOpacity style={styles.container} onPress={ () => onSelect(item) } onLayout={ e => this.setState({ layout: e.nativeEvent.layout }) }>
                <Text style={styles.text}> { item.name } </Text>
                <Image source={image} style={styles.image} resizeMode={'cover'} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20, //857/600
        height: (Dimensions.get('window').width / 2 - 20),

        ...Platform.select({
            ios: {
              shadowColor: 'rgba(255,255,255,0.1)',
              shadowOpacity: 1,
              shadowOffset: { height: 4, width: 4 },
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
        })
    },

    image: {
        width: Dimensions.get('window').width / 2 - 20, //857/600
        height: (Dimensions.get('window').width / 2 - 20) * (857/600),
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

    }

})