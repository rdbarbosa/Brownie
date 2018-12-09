import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, showUpdate, remove } from './produtoActions'

export class ProdutoList extends Component {
    componentWillMount(){
        this.props.search()
    }

    render() {
        const renderRows = () => {
            const list = this.props.list || []
            return list.map((prd, index) => (
                <tr key={prd._id}>
                    <td>{index+1}</td>
                    <td>{prd.nome}</td>
                    <td>{prd.categoria}</td>
                    <td>
                        <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.props.showUpdate(prd)}>
                        <i className="fa fa-pencil-alt"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => this.props.remove(prd)}>
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
                            <th>Categoria</th>
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

const mapStateToProps = state => ({list: state.produto.list})
const mapDispatchToProps = dispatch => bindActionCreators({ search, showUpdate, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProdutoList)

