const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const router = require('./router');
const {addUser, removeUser, getUser, getUserInRoom} = require('./users/users');

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
    socket.on('join', ({username, room}, callback) => {
        const user = addUser({username, room});
        console.log('room: ', room)
        socket.join(room);
        io.emit('message', { username: 'admin', message: `${user.username} joined!`});
    })
    socket.on('sendMessage', ({currentMessage, username}) => {
        io.emit('message', { username, message: currentMessage})
    })
    socket.on('disconnect', () => {
        console.log("User disconnected!")
    })
})
