const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    codigo: {type: String, required: false},
    nome: {type: String, required: [false, 'Informe o nome do usuario!']},
    senha: {type: String, required: [false, 'Informe o nome do usuario!']},    
    email: {type: String, required: false},
    criado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now }
})

module.exports = restful.model('usuarios', usuarioSchema)