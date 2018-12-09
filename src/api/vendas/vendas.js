const restful = require('node-restful')
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

const vendaSchema = new mongoose.Schema({
    codigo: {type: String, required: true},    
    cliente: clienteSchema,
    produtos: [produtoSchema],
    dataVenda: { type: Date, default: Date.now },
    fechada: {type: Boolean, required: false, default: false},
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('vendas', vendaSchema)