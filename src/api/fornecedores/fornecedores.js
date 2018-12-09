const restful = require('node-restful')
const mongoose = restful.mongoose

const fornecedorSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    nome: {type: String, required: [true, 'Informe o nome do fornecedor!']},
    categoria: {type: String, required: true},
    cnpj: {type: String, required: true},
    endereco: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cep: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('fornecedors', fornecedorSchema)