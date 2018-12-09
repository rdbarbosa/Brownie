const FormaPagamento = require('./formaPagamento')

FormaPagamento.methods(['get', 'post', 'put', 'delete'])
FormaPagamento.updateOptions({new: true, runValidators: true})

module.exports = FormaPagamento