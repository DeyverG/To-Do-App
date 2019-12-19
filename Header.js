import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Header </Text>
                <TextInput style={styles.texto} placeholder='Aqui escribe tu texto'
                onChangeText={this.props.cambioTexto} 
                onSubmitEditing={this.props.agregar}
                value = {this.props.texto}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 2,
        backgroundColor: '#006400',
      },

    texto:{
        paddingHorizontal: 16,
        fontSize: 24
    },
})

