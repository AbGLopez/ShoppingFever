import React, {Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import index from 'axios';

export default class CategoryList extends Component {

    constructor(props){
        super(props)
        this.state = {
            listCategory: []
        }
    }

    componentDidMount() {
        this.setState( { texto: 'Texto cambiado'})
    }

    componentWillMount() {
       
        axios.get('http://146.185.137.85/got/web/casas')
        .then((response) => {
            console.log("axios get response", this)
            const productCategoryList = response.data && response.data.records ? response.data.records : []
            this.setState({ listCategory: productCategoryList })
        })
        .catch((error) => {
            console.log("axios get error: ", error);
        });
        

    }

    renderItem(category) {
        return (
            <View style={{height: 200, backgroundColor: 'red', marginVertical: 10}}>
                <Text>{ category.nombre }</Text>
            </View>
        )
    }

    render() {
        console.log('props', this.props.listCategory);
        
        return (
            <View>
                <FlatList
                    data={ this.state.listCategory}
                    renderItem={ ({ item }) => this.renderItem(item)} 

                />

            </View>
        )
    }

}

