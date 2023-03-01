// npm i eslint, jest, chance, socket.io, dotenv, socket.io-client
// npm init
// this is part of the class demo
// demo code will be provided for this lab if necessary

//* Visual Metaphor: Think of socket.io lab like a post office sending mail out to specific addresses. Socket.emit means a message is being sent to anyone at that address. Server.emit means a message is being sent to anyone on that server(i.e. on that street) Emit means to send out. On means to listen for.

'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

//create a namespace
//listening for events at http://localhost:3001
const brightness = server.of('/brightness');

brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);
  // checkout the socket.onAny()
  // how to join a room
  socket.on('Join', (room) => {
    console.log('these are the rooms', socket.adapter.rooms);
    console.log('-----payload is the room-----', room);
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('these are the rooms', socket.adapter.rooms);
  });

  socket.on('SUNLIGHT', (payload) => {
    console.log('sunlight: ', payload);
  });

});


// socket server singleton: listening for events at http://localhost:3001
const server = new Server();

server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('SERVER: Message event', payload);

    // 3 ways I can emit this
    // socket.emit('MESSAGE', payload); basic emit back to sender
    // server.emit('MESSAGE', payload); // send to all clients connected to the server
    socket.broadcast.emit('MESSAGE', payload); // sends to all parties in socket except for sender

  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);

  });
});

server.listen(PORT);