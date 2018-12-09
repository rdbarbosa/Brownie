const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false);

module.exports = mongoose.connect('mongodb://user.dev:cpd*123@ds133622.mlab.com:33622/brownie', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."