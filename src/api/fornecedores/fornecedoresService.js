const Fornecedores = require('./fornecedores')

Fornecedores.methods(['get', 'post', 'put', 'delete'])
Fornecedores.updateOptions({new: true, runValidators: true})

Fornecedores.route('count', (req, res, next) => {
    Fornecedores.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Fornecedores