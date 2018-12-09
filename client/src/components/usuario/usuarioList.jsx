import React, { Component } from 'react'

export class usuarioList extends Component {

    render() {

        const renderRows = () => {
            const list = this.props.list || []
            return list.map(usuario => {
              return(
                <tr key={usuario._id}>
                  <td>{usuario._id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => this.load(usuario)}><i className="fa fa-pencil-alt"></i></button>
                    
                    <button className="btn btn-danger ml-2" onClick={() => this.remove(usuario)}><i className="fa fa-trash"></i></button>
                  </td>
                </tr>
              )
            })
          }

    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
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

export default usuarioList
