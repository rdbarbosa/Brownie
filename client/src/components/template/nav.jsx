import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="produtos">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="clientes">Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="vendas">Vendas</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="usuarios">Usuarios</Link>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Relatórios
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/">Relatórios 1</Link>
                            <Link className="dropdown-item" to="/">Relatórios 2</Link>
                            <Link className="dropdown-item" to="/">Relatórios 3</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Exemplos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/exemplos">Modal</Link>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
    </aside>
