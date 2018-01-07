import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Colors } from 'ShoppingFever/src/commons'
import { Input, Button } from 'ShoppingFever/src/widgets'
import ImagePicker from 'react-native-image-picker'

// Redux
import { connect } from 'react-redux'
import * as CartActions from 'ShoppingFever/src/redux/actions/cart'


class CharacterNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nameError: '',

            age: '',
            ageError: '',

            image: null,
        }
    }

    validateForm() {
        let valid = true
        let errors = {}

        if(!this.state.name) {
            errors.name = 'Elige un nombre válido'
            valid = false
        }

        if(!this.state.age) {
            errors.age = 'Elige una edad válida'
            valid = false
        }

        this.setState({ 
            nameError: errors.name ? errors.name : '',
            ageError: errors.age ? errors.age : '',
        })

        return valid
    }

    onSubmit() {

        if( this.validateForm() ) {
            
            const characterData = {
                nombre: this.state.name,
                edad: this.state.age,
                image: this.state.image ? 'data:image/jpeg;base64,' + this.state.image.data : null,
                casa : this.props.house.id,
            }

            this.props.postCharacter(characterData)  
        } 
    }

    render() {        
        const imageUri = this.state.image ? { uri: this.state.image.uri } : null
        const imageButtonText = this.state.image ? this.state.image.fileName : 'Elegir imagen'

        return (
            <View style={styles.container}>

                <View style={styles.imageContainer}>

                    <Image source={imageUri} style={styles.imageContainerBackground} resizeMode={'cover'} />
                    
                    <TouchableOpacity style={styles.button} onPress={ () => this.onSelectImageTapped() } >
                        <Text style={styles.textButton}>{ imageButtonText }</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={(v) => this.setState({ name: v })}
                        value={this.state.name}
                        error={this.state.nameError}
                        label={'Nombre:'}
                        placeholder={'Eddard Stark'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={(v) => this.setState({ age: v })}
                        value={this.state.age}
                        error={this.state.ageError}
                        label={'Edad:'}
                        placeholder={'27'}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label={'Guardar'}
                        onPress={() => this.onSubmit()}
                        isFetching={this.props.isFetching}
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching,
        house: state.houses.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        postCharacter: (data) => {
            dispatch(CharactersActions.postCharacter(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNew)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainerBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    button: {
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
    },

    textButton: {
        color: 'white',
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },

})