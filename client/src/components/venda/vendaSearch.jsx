import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'

class VendaSearch extends Component {
    
    componentWillMount() {
        //this.props.search()
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group col-sm-11">
                        <Field name="search" className="form-control col-md-12" component="input"/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => console.log('search')}>
                        <i className="fa fa-search"></i>
                    </button>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-backdrop="static" data-keyboard="false">
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        )
    }
}

VendaSearch = reduxForm({ form: 'vendaSearch', destroyOnUnmount: false })(VendaSearch)
const selector = formValueSelector('vendaSearch')
const mapStateToProps = state => ({  })
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaSearch)
