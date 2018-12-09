const restful = require('node-restful')
const mongoose = restful.mongoose

const formasPagamentoSchema = new mongoose.Schema({
    tipo: { type: String, require: false },
    dias: { type: Number, require: false }
})




module.exports = restful.model('FormaPagamento', formasPagamentoSchema)