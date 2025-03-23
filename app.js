const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIo(server)
const port = 3000

app.set('view engine', 'ejs')

io.on('connection', (socket) => {
    console.log('A user connected')

    socket.on('chatmessage', (message) => {
        io.emit('chatmessage', message)
    })
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})


app.get('/', (req, res) => {
    res.render('index')
})

server.listen(port)

console.log(`Server läuft auf http://localhost:${port}`)