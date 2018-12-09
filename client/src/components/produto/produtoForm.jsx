import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { init, search } from './produtoActions'

export class ProdutoForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="codigo">Codigo</label>
              <Field name="codigo" component="input" type="text" className="form-control"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="endereco">Nome</label>
              <Field name="nome" component="input" type="text" className="form-control"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="endereco">Descrição</label>
              <Field name="descricao" component="input" type="text" className="form-control"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="categoria">Categoria</label>
              <Field name="categoria" component="input" type="text" className="form-control"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cpfcnpj">unidade</label>
              <Field name="unidade" component="input" type="text" className="form-control"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cpfcnpj">Preço</label>
              <Field name="preco_venda" component="input" type="text" className="form-control"/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" >Salvar</button>
          <button type="button" className="btn btn-default" data-dismiss="modal" aria-label="Close" onClick={this.props.init}>Cancelar</button>
        </form>
      </div>
    )
  }
}

ProdutoForm = reduxForm({ form: 'produtoForm', destroyOnUnmount: false })(ProdutoForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ search, init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProdutoForm)
