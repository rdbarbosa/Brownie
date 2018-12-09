import React, { Component } from 'react'
import UsuarioForm from './usuarioForm'
import UsuarioList from './usuarioList'

import Main from '../template/main'

const breadcrumbProps = {
  title: 'Usuarios'
}

export class usuario extends Component {

  componentWillMount(){
        
  }

  updateField(event){
    const usuario = { ...this.state.usuario }
    usuario[event.target.name] = event.target.value
    this.setState({usuario})
  }

  render() {  
    return (
      <Main {...breadcrumbProps}>
        <UsuarioForm />
        <UsuarioList />
      </Main>
    )
  }
}

export default usuario
