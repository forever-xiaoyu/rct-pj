// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express')
// eslint-disable-next-line import/no-extraneous-dependencies
const app = require('express')()
const server = require('http').createServer(app)

server.listen(9999)
app.use(express.static('./dist'))
app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`)
})
