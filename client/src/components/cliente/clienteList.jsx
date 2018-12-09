import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init, search, showUpdate, remove } from './clienteActions'

class ClienteList extends Component {

  componentWillMount(){
    this.props.search()
  }

  render(){
    const renderRows = () => {
      const list = this.props.list || []
        return list.map(cli => (
            <tr key={cli._id}>
                <td>{cli._id}</td>
                <td>{cli.nome}</td>
                <td>{cli.email}</td>
                <td>{cli.estado}</td>
                <td>
                  <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.props.showUpdate(cli)}>
                    <i className="fa fa-pencil-alt"></i>
                  </button>
                  <button className="btn btn-danger" onClick={() => this.props.remove(cli)}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
            </tr>
      ))
    }
    return (
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Estado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.cliente.list})
const mapDispatchToProps = dispatch => bindActionCreators({ init, search, showUpdate, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteList)
