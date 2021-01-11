'use strict';

const express = require('express');
const socketIO = require('socket.io');
// const routes = require('./routes');

const PORT = process.env.PORT || 80;
const INDEX = '/index.html';

let app = express();


const server = app
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});


/* ROUTES */
app.use('/', function(req, res) {
  io.emit('msg','123);
   res.send('yyeeeea');
});



// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
