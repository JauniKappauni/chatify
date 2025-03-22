const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIo(server)
const port = 3000

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

server.listen(port)

console.log(`Server läuft auf http://localhost:${port}`)