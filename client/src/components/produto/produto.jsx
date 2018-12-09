import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Modal from '../template/modal'
import Form from './produtoForm'
import List from './produtoList'

import { init, save, create, update, submit } from './produtoActions'

export class Produto extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#exampleModal">add</button>
        <Modal title="Cadastro de Produtos">
          <Form onSubmit={ this.props.save } />
        </Modal>
        <List />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, save, create, update, submit }, dispatch)
export default connect(null, mapDispatchToProps)(Produto)
