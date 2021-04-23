const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(router);

server.listen(PORT, () => {
    console.log(`Server is started on ${PORT} port`)
})

io.on('connection', (socket) => {
    console.log("New connection!");
    socket.on('disconnect', () => {
        console.log("User disconnected!")
    })
})
