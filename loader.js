const server = require('./src/config/server')
require('./src/config/database')
require('./src/config/routes')(server)

const express = require('express')
const path = require('path');

server.use(express.static(path.join(__dirname, 'client/build')));
server.use(express.static(path.join(__dirname, 'client/build')));

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
});
  