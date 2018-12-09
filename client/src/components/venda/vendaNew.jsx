import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import List from './vendaList'

export class VendaNew extends Component {
  render() {
    return (
      <div className="">
        <form>
          <div className="form-row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="codigo">Cliente</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="codigo">Data</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="form-row">
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="codigo">Codigo</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <label htmlFor="codigo">Codigo</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="codigo">Observação</label>
                <Field name="codigo" component="input" type="text" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-4">
              <div className="form-group">
                <Field name="search" className="form-control" component="input"/>
              </div>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary" onClick={() => console.log('search')}>
                <i className="fa fa-search"></i>
              </button>
              <button type="button" className="btn btn-success" >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

VendaNew = reduxForm({ form: 'vendaForm', destroyOnUnmount: false })(VendaNew)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaNew)
