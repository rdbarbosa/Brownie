const Vendas = require('./vendas')

Vendas.methods(['get', 'post', 'put', 'delete'])
Vendas.updateOptions({new: true, runValidators: true})

Vendas.route('count', (req, res, next) => {
    Vendas.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Vendas