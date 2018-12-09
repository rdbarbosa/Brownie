const restful = require('node-restful')
const mongoose = restful.mongoose

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: [true, 'Informe o nome do cliente!']},
    preco_venda: {type: Number, required: true}
})

const formasPagamentoSchema = new mongoose.Schema({
    tipo: { type: String, require: false },
    dias: { type: Number, require: false }
})

const clienteSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    nome: {type: String, required: [true, 'Informe o nome do cliente!']},
    categoria: {type: String, required: true},
    cpfcnpj: {type: String, required: true},
    endereco: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cep: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    produtos: [produtoSchema],
    formaPagamento: [formasPagamentoSchema],
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('Clientes', clienteSchema)