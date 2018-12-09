import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, change, save, clear, create } from './usuarioActions'

class usuarioForm extends Component {

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { save,  usuario } = this.props
        return (
            <form >
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control"
                                name="nome" 
                                // value={this.state.usuario.nome} 
                                // onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"
                                name="email" 
                                // value={this.state.usuario.email} 
                                // onChange={e => this.updateField(e)}
                                placeholder="Digite o email..." />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary" onClick={() => save(usuario)}>Salvar</button>
                            <button className="btn btn-primary" >Teste</button>
                            <button className="btn btn-secundary ml-2" onClick={e => this.clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}



const mapStateToProps = state => ({ usuario: state.usuario.usuario })
const mapDispatchToProps = dispatch => bindActionCreators({ save, change, search, clear, create }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(usuarioForm)