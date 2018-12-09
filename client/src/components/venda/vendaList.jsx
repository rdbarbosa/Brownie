import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, showUpdate, remove } from './vendaAction'

export class VendaList extends Component {
  
  componentWillMount(){
    this.props.search()
  }

  render() {
    const renderRows = () => {
      const list = this.props.list || []
        return list.map(v => (
            <tr key={v._id}>
                <td>{v._id}</td>
                <td>{v._id}</td>
                <td>{v._id}</td>
                <td>{v._id}</td>
                <td>
                  <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={() => this.props.showUpdate(v)}>
                    <i className="fa fa-pencil-alt"></i>
                  </button>
                  <button className="btn btn-danger" onClick={() => this.props.remove(v)}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
            </tr>
      ))
    }
    return (
      <div className="form-row">
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Unit.</th>
                        <th>Subtotal</th>
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

const mapStateToProps = state => ({list: state.venda.list})
const mapDispatchToProps = dispatch => bindActionCreators({ search, showUpdate, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaList)
