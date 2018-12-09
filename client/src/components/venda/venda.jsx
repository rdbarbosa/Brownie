import React, { Component } from 'react'

import Modal from '../template/modal'
import Search from './vendaSearch'
import Form from './vendaForm'

export class Vendas extends Component {
    render() {
        return (
            <div>
                <Search />
                <Modal>
                  <Form />
                </Modal>
            </div>
        )
    }
}

export default Vendas