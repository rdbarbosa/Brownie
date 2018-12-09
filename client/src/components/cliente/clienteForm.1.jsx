import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { change, search, save, remove, clear } from './clienteActions'

class ClienteForm extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.search()
  }

  render() {
    const { change, search, save, remove, clear, cliente } = this.props
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control" onChange={this.props.change} value={this.props.cliente.nome} />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" className="form-control" />
          </div>
          <button className="btn btn-primary">Salvar</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({cliente: state.cliente.cliente})
const mapDispatchToProps = dispatch => bindActionCreators({ change, search, save, remove, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteForm)
