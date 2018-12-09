import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector  } from 'redux-form'

import './venda.css'
import { init } from './vendaAction'

export class VendaForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="cliente">Cliente</label>
                            <input type="text" className="form-control" id="cliente" placeholder="Cliente" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Data</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="DD/MM/AAAA" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label for="inputCity">Produto</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Quantidade</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip"></label>
                            <button type="button" className="btn btn-success btn-add">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label for="inputCity">Produto</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Quantidade</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Fechar
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

VendaForm = reduxForm({ form: 'vendaForm', destroyOnUnmount: false })(VendaForm)
const selector = formValueSelector('vendaForm')
const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaForm)