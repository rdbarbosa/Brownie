const port = process.env.PORT || 5000;

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const cors = require('cors')
const queryParser = require('express-query-int')
const path = require('path');
const generatePassword = require('password-generator')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.use(cors())

server.use(queryParser())

// Serve static files from the React app
server.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
server.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

server.listen(port, function(){
    console.log(`API is running on port ${port}. no caminho ${__dirname}`)
})

module.exports = server