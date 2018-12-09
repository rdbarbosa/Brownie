const restful = require('node-restful')
const produto = require('../produtos/produtos')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    nome: {type: String, required: true},
    valor: {type: String, required: true},
    qtd: {type: Number, required: true}
})

const clienteSchema = new mongoose.Schema({
    nome: {type: String, required: [true, 'Informe o nome do cliente!']}
})

const pedidoSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    categoria: {type: String, required: true},
    cliente: {clienteSchema},
    produtos: [produtoSchema],
    dataPedido: { type: Date, default: Date.now },
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('pedidos', pedidoSchema)