import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import Tarea from './Tarea'

export default class Body extends Component {
    render() {
        return (
            <View style={styles.container}>

                { this.props.carga && // Si carga es true muestra el indicador
                    <ActivityIndicator
                    size='large'
                    color='#9F9D9C'
                    style={styles.cargando}/>
                }

                { !this.props.carga && // aqui se dice que cuando sea Negativo mostrara la lista
                    <FlatList           // Osea cuando se termine el SetTimeOut
                        data={this.props.tareas}
                        renderItem={ ({item}) => <Tarea items={item} 
                        eliminar={this.props.eliminar}/>}/>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 9,
        backgroundColor: '#00ff00',
      },
    cargando:{
        justifyContent: 'center',
        alignItems: 'center'
    },
})
