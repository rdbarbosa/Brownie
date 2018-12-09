import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search } from './vendaAction'

export class VendaItemList extends Component {

    componentWillMount(){
        this.props.search()
    }

    render() {
        const renderRows = () => {
            const list = this.props.list || []
            return list.map( prd => (
                <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => console.log(prd)}>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            ))
        }

        return (
            <div>
                <table>
                    <thead>
                        <th>Codigo</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Total</th>
                        <th></th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaItemList)