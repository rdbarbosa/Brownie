import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import Dashboard from '../components/dashboard/dashboard'
import Cliente from '../components/cliente/cliente'
import Usuario from '../components/usuario/usuario'
import Produto from '../components/produto/produto'
import Venda from '../components/venda/venda'
import NovaVenda from '../components/venda/novaVenda'
import Exemplos from '../components/exemplos/index'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/clientes' component={Cliente} />
        <Route path='/usuarios' component={Usuario} />
        <Route path='/produtos' component={Produto} />
        <Route path='/vendas' component={Venda} />
        <Route path='/novavenda' component={NovaVenda} />
        <Route path='/exemplos' component={Exemplos} />
        <Redirect from='*' to='/' />
    </Switch>


