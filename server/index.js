'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server();

//-----Caps namespace-----//
const CAPS = server.of('/CAPS');

CAPS.on('connection', (socket) => {
  console.log('Socket connected to CAPS namespace', socket.id);
  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Notifying Driver that package is ready for pickup', payload);
    CAPS.emit('MESSAGE', payload);
  });
  socket.on('DELIVERED', (payload) => {
    console.log('SERVER: Notifying Vendor that package has been delivered');
    CAPS.emit('CONFIRMATION', payload);
  });
});


server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);
  server.emit('Connected to Server!');
});

server.listen(PORT);