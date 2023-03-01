'use strict';
//driver

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/CAPS');

socket.on('MESSAGE', (payload) => {
  setTimeout(() => {
    pickup(payload);
  }, 1000);
  setTimeout(() => {
    inTransit(payload);
  }, 1500);
  setTimeout(() => {
    Delivered(payload);
  }, 3000);
});

function pickup(payload) {
  console.log('Driver: Picking up package', payload);
}

function inTransit(payload) {
  console.log('Driver: Package is in Transit', payload);
}

function Delivered(payload) {
  console.log('Driver: Package has been delivered');
  socket.emit('DELIVERED', payload);
}














//-----Legacy Code-----//
// function parcelReady(payload) {
//   setTimeout(() => {
//     eventPool.emit('Step 3', payload);
//     logger(payload, 'package is picked up');
//     console.log(`Driver picked up: ${payload.orderId}`);
//   }, 1000);
// }

// function onRoute(payload) {
//   setTimeout(() => {
//     eventPool.emit('Step 4', payload);
//     logger(payload, 'package is in transit');
//     console.log(`Driver in transit: ${payload.orderId}`);
//   }, 2000);
// }

// function packageDelivered(payload){
//   setTimeout(() => {
//     eventPool.emit('Step 5', payload);
//     logger(payload, 'package is delivered');
//     console.log(`Delivery complete: ${payload.orderId}`);
//   }, 3000);
// }
// function logger(payload, str) {
//   const date = Date.now();
//   const today = new Date(date).toUTCString();
//   console.log(`
//   EVENT: {
//     event: "${str}",
//     time: "${today}",
//     payload: {
//         store: "${chance.company()}", 
//         orderId: "${chance.integer()}", 
//         customer: "${chance.name()}", 
//         address: "${chance.address()}", 
//     },
//   }`);
// }
// module.exports = {
//   parcelReady, 
//   onRoute, 
//   packageDelivered,
// };