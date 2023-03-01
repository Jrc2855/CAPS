'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost3001');

socket.on('MESSAGE', (payload) => {
  setTimeout(() => {
    console.log('Message Received', payload);
    socket.emit('RECEIVED', payload);
  }, 1000);
});

// we can also do the above like this
socket.on('MESSAGE', messageHandler);

function messageHandler(payload){
  setTimeout(() => {
    console.log('Message received', payload);
  }, 1000);
}