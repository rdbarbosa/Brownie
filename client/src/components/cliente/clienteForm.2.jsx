import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { search, init } from './clienteActions'

class ClienteForm extends Component {

  componentWillMount(){}

  render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit={ handleSubmit }>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Cadastro</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Produtos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Formas de Pagamento</a>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
              <div className="form-group col-md-6">
                <label htmlFor="categoria">Categoria</label>
                <Field name="categoria" component="input" type="text" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cpfcnpj">CPF/CNPJ</label>
                <Field name="cpfcnpj" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="endereco">Endereço</label>
                <Field name="endereco" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="cidade">Cidade</label>
                <Field name="cidade" component="input" type="text" className="form-control"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="estado">Estado</label>
                <Field name="estado" component="input" type="text" className="form-control"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="cep">CEP</label>
                <Field name="cep" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="telefone">Telefone</label>
                <Field name="telefone" component="input" type="text" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">E-mail</label>
                <Field name="email" component="input" type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="codigo">Codigo</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

          </div>
        </div>
        <button type="submit" className="btn btn-primary" >Salvar</button>
        <button type="button" className="btn btn-default" data-dismiss="modal" aria-label="Close" onClick={this.props.init}>Cancelar</button>
      </form>
    )
  }

}

ClienteForm = reduxForm({ form: 'clienteForm', destroyOnUnmount: false })(ClienteForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ search, init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteForm)