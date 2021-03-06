import React, { Component } from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {  } from './clienteActions'

class ProdutoClienteList extends Component {

    componentWillMount(){ }

    add(index, item = { nome_produto: '', preco_venda: 0 }) {
        this.props.arrayInsert('clienteForm', 'produtos', index, item)
    }

    remove(index) {
        if(this.props.list.length > 0) {
            this.props.arrayRemove('clienteForm', 'produtos', index)
        }
    }

    render(){
        const list = this.props.list || []
        const renderRows = () => {
            return list.map((prd, index) => (
                <tr key={index}>
                    {/* <td><Field name={`produtos[${index}].nome`} component="input" /></td> */}
                    <td>{prd.nome_produto}</td>
                    <td>{prd.preco_venda}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.remove(index)}>
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
                            <th><Field name="nome_produto" component="input"/></th>
                            <th><Field name="preco_venda" component="input"/></th>
                            <th>
                                <button type="button" onClick={() => this.add(list.length, { nome_produto: 'P', preco_venda: 10 })}>add</button>
                                <button type="button" onClick={() => console.log(this.props.nome_produto)}>log</button>
                            </th>
                        </tr>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
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

const mapStateToProps = state => ({  })
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProdutoClienteList)
