import React, { Component } from 'react'
import { Field, formValueSelector, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {  } from './clienteActions'

class ProdutoClienteList extends Component {

    componentWillMount(){ }

    add(index, item = {}) {
        this.props.arrayInsert('clienteForm', 'produtos', index, item)
    }

    remove(index) {
        if(this.props.list.length > 0) {
            this.props.arrayRemove('clienteForm', 'produtos', index)
        }
    }

    render(){
        const {nome_produto, preco_venda} = this.props.values
        const list = this.props.list || []
        const renderRows = () => {
            return list.map((item, index) => (
                <tr key={index}>
                    {/* <td><Field name={`produtos[${index}].nome`} component="input" className="form-control"/></td>
                    <td><Field name={`produtos[${index}].preco_venda`} component="input" className="form-control"/></td> */}
                    <td>{item.nome}</td>
                    <td>{item.preco_venda}</td>
                    <td>
                        {/* <button type="button" className="btn btn-success" onClick={() => this.add(list.length)}>
                            <i className="fas fa-plus"></i>
                        </button> */}
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
                            <th><Field name="nome_produto" component="input" className="form-control" /></th>
                            <th><Field name="preco_venda" component="input" className="form-control" /></th>
                            <th>
                                <button type="button" onClick={() => this.add(list.length, {"nome" : nome_produto, preco_venda})} className="btn btn-success">add</button>
                            </th>
                        </tr>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
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

// ProdutoClienteList = reduxForm({form: 'clienteForm'})(ProdutoClienteList)
//ProdutoClienteList = reduxForm({ form: 'clienteForm', destroyOnUnmount: false })(ProdutoClienteList)
const selector = formValueSelector('clienteForm')
const mapStateToProps = state =>  ({  values: selector(state, 'nome_produto', 'preco_venda') })
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect( mapStateToProps, mapDispatchToProps)(ProdutoClienteList)