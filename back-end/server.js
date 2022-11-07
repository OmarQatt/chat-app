'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

const io = require('socket.io')(3001, {
    cors: {
        origin: '*',
    }
});

const users = {};

io.on('connection', socket => {
   
    socket.on('new-user-joined', name => {
        console.log('New user', name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

function start(port) {
    app.listen(port, () => console.log(`Server is starting on port ${port}`))
}

module.exports = {
    app,
    start
};