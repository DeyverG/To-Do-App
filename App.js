import React, { Component } from 'react'
import { Text, StyleSheet, View, AsyncStorage } from 'react-native'
import Header from './Header'
import Body from './Body'

export default class App extends Component {

  constructor() {
    super()
  
    this.state = {
       tareas: [],
       texto: '',
       cargando: true
    }
  }

  componentDidMount(){
    this.recuperarEnTelefono()
    setTimeout( () =>{
      this.setState({
        cargando: false
      })
    }, 2000)
    
  }
  
  establecerTexto = (value) => {
    this.setState({ texto: value })
  }

  agregarTexto = () => {
    
    if (this.state.texto !== ''){
      const nuevasTareas = [...this.state.tareas, {texto:this.state.texto, key: Date.now()}]
      this.guardarEnTelefono(nuevasTareas)
      this.setState({ tareas: nuevasTareas, texto: ''})
    }
  }

  eliminarTarea = (id) =>{
    const nuevasTareas = this.state.tareas.filter((tarea) => tarea.key !== id)
    this.guardarEnTelefono(nuevasTareas)
    this.setState({
      tareas: nuevasTareas
    })
  }

  guardarEnTelefono = (tareas) => {
    AsyncStorage.setItem('@BaseDeDatos:tareas', JSON.stringify(tareas))
  }

  recuperarEnTelefono = () => {
    AsyncStorage.getItem('@BaseDeDatos:tareas').then( (valor) => {
      if( valor !== null){
        const nuevasTareas = JSON.parse(valor)
        this.setState({
          tareas: nuevasTareas
        })
      }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header texto={ this.state.texto } cambioTexto={ this.establecerTexto } agregar={ this.agregarTexto }/>
        <Text> { this.state.texto } </Text>
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} carga={this.state.cargando}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  }
})
