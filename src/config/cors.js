module.exports = (req, res, next) => {
    res.header('Acess-Control-Allow-Origem', '*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Methods', 'Origin, X-requested-With, Content-Type, Accept')
    next()
}