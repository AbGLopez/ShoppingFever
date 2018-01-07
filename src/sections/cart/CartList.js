import React, { Component } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { Colors } from 'ShoppingFever/src/commons'
import { Actions } from 'react-native-router-flux'

// Importamos nuestra celda
import CartCell from './CartCell'

// Redux
import { connect } from 'react-redux'
import * as CartActions from 'ShoppingFever/src/redux/actions/cart'


class CartList extends Component {

    componentWillMount() {
        // const houseId = this.props.house ? this.props.house.id : null
        // traer el carrito
        this.props.fetchCartList()
    }

    onSelect(character) {
        // llevar al producto
        this.props.updateSelected(character)
    }

    renderItem(item, index) {
        return <CartCell item={item} onSelect={ (character) => this.onSelect(character) } />
    }
   

    render() {
        return (
            <View style={styles.container}>

                <FlatList 
                    data            = { this.props.cartList }
                    renderItem      = { ({item, index}) => this.renderItem(item, index) }
                    keyExtractor    = { (item, index) => index }
                    extraData       = { this.props }
                    
                />
                <Text> Total</Text>
                

            </View>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        house       : state.houses.item,
        list        : state.characters.list,
        character   : state.characters.item,
        // add
        cartList    : state.houses.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        fetchCartList: (houseId) => {
            dispatch(CartActions.fetchCartList(houseId))
        },

        updateSelected: (character) => {
            dispatch(CartActions.updateCartSelected(character))
            Actions.CharacterView({ title: character.nombre })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        // backgroundColor: Colors.background,
        backgroundColor: 'white',
    },

})