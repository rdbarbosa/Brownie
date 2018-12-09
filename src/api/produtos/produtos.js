const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    nome: {type: String, required: [true, 'Informe o nome do produto!']},
    categoria: {type: String, required: true},
    descricao: {type: String, required: true},
    unidade: {type: String, required: true},
    custo: {type: String, required: false},
    preco_venda: {type: String, required: true},
    fornecedor: {type: String, required: false},
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('produtos', produtoSchema)