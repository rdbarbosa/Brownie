import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Modal from '../template/modal'
import Tab from '../template/tab'
import Form from './clienteForm'
import List from './clienteList'

import { init, save, create, update, submit } from './clienteActions'

class Cliente extends Component {

  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#exampleModal" onClick={this.props.init}>add</button>
        <Modal title="Cadastro de cliente">
          <Form onSubmit={ this.props.save } />
        </Modal>
        <List />
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({ init, save, create, update, submit }, dispatch)
export default connect(null, mapDispatchToProps)(Cliente)