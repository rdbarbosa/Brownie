const Clientes = require('./clientes')

Clientes.methods(['get', 'post', 'put', 'delete'])
Clientes.updateOptions({new: true, runValidators: true})

Clientes.route('count', (req, res, next) => {
    Clientes.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Clientes