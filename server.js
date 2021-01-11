'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 80;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});


express.get('/', function (req, res) {
  io.emit('msg', new Date().toTimeString());
})


// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
