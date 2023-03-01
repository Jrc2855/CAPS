'use strict';
//vendor

const { Chance } = require('chance');
const chance = new Chance();
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/CAPS');

let payload = {
  store: chance.company(),
  orderId: chance.string({ length: 10 }),
  customer: chance.name(),
  address: chance.address(),
};

function messageSender() {
  payload;
  let text = 'Vendor: A package is ready for pickup!'; 
  console.log(text);
  console.log(payload);
  socket.emit('MESSAGE', { payload });
}
messageSender();

function confirmationReceiver(payload) {
  let text = 'Vendor: Package has been Delivered Thank you for shopping!';
  console.log(payload);
  console.log(text);
}
socket.on('CONFIRMATION', (payload) => {
  confirmationReceiver(payload);
});
  







//-----Legacy Code-----//

//* If I can get this to load on my first baton pass, then it will send the delivery info through all of my connections.
//function logger(payload, str) {
//const date = Date.now();
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
//
// function createPackage() {
//   let payload = {text: 'Their is a package ready for pickup!'};
//   eventPool.emit('Step 2', payload);
// }
// function confirmDelivery() {
//   setTimeout(() => {
//     console.log('Thank you for ordering!');
//   }, 4000);
// }
// module.exports = {
//   createPackage,
//   confirmDelivery,
// storeInfo,
// };