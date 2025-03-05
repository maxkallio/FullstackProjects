const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/chatapp', { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', async (data) => {
        const message = new Message({ username: data.username, text: data.text });
        await message.save();
        io.emit('message', message);
    });

    socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(5002, () => console.log("Chat server running on port 5002"));