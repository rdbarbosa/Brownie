const Usuarios = require('./usuarios')

Usuarios.methods(['get', 'post', 'put', 'delete'])
Usuarios.updateOptions({new: true, runValidators: true})

Usuarios.route('count', (req, res, next) => {
    Usuarios.countDocuments((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Usuarios