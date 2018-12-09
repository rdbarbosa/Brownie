const Pedidos = require('./pedidos')

Pedidos.methods(['get', 'post', 'put', 'delete'])
Pedidos.updateOptions({new: true, runValidators: true})

Pedidos.route('count', (req, res, next) => {
    Pedidos.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Pedidos