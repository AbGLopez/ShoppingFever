import React, { Component } from 'react'
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native'
import { AsyncCalls, Colors } from 'ShoppingFever/src/commons'
import HousesCell from '../HousesCell'
import styles from './styles'

export default class view extends Component {

    componentWillMount() {
        this.props.fetchHousesList()
    }

    renderFooter() {
        return <ActivityIndicator
            animating={this.props.isFetching}
            size="large"
            color="red"
            style={{ marginVertical: 10 }}
        />
    }

    onSelect(house) {
        this.props.updateSelected(house)
    }

    renderItem(item, index) {

        return (
            <HousesCell
                item={item}
                onSelect={(v) => this.onSelect(v)}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>

                <FlatList
                    data={this.props.list}
                    ListFooterComponent={() => this.renderFooter()}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => item.id}
                    extraData={this.props}
                    numColumns={2}
                   
                />

            </View>
        )
    }
}