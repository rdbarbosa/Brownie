const express = require('express')

module.exports = function (server) {

    //Definir URL base para todas a rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas
    const Clientes = require('../api/clientes/clientesService')
    const Fornecedores = require('../api/fornecedores/fornecedoresService')
    const Pedidos = require('../api/pedidos/pedidosService')
    const Produtos = require('../api/produtos/produtosService')
    const Usuarios = require('../api/usuarios/usuariosService')
    const FormPagamento = require('../api/pagamentos/formaPagamentoService')
    const Vendas = require('../api/vendas/vendasService')

    //Registro das rotas
    Clientes.register(router, '/clientes')
    Fornecedores.register(router, '/fornecedores')
    Pedidos.register(router, '/pedidos')
    Produtos.register(router, '/produtos')
    Usuarios.register(router, '/usuarios')
    FormPagamento.register(router, '/formapagamento')
    Vendas.register(router, '/vendas')
    
}