const Produtos = require('./produtos')

Produtos.methods(['get', 'post', 'put', 'delete'])
Produtos.updateOptions({new: true, runValidators: true})

Produtos.route('count', (req, res, next) => {
    Produtos.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Produtos