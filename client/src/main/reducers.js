import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../components/dashboard/dashboardReducer'
import ProdutoReducer from '../components/produto/produtoReducer'
import ClienteReducer from '../components/cliente/clienteReducer'
import VendaReducer from '../components/venda/vendaReducer'
import UsuarioReducer from '../components/usuario/usuarioReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    produto: ProdutoReducer,
    cliente: ClienteReducer,
    usuario: UsuarioReducer,
    venda: VendaReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer