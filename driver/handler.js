'use strict';
//driver

const eventPool = require('../eventPool.js');

function parcelReady(payload) {
  setTimeout(() => {
    eventPool.emit('Step 3', payload);
    logger(payload, 'package is picked up');
    console.log(`Driver picked up: ${payload.orderId}`);
  }, 1000);
}

function onRoute(payload) {
  setTimeout(() => {
    eventPool.emit('Step 4', payload);
    logger(payload, 'package is in transit');
    console.log(`Driver in transit: ${payload.orderId}`);
  }, 2000);
}

function packageDelivered(payload){
  setTimeout(() => {
    eventPool.emit('Step 5', payload);
    logger(payload, 'package is delivered');
    console.log(`Delivery complete: ${payload.orderId}`);
  }, 3000);
}

function logger(payload, str) {
  const date = Date.now();
  const today = new Date(date).toUTCString();
  console.log(`
  EVENT: {\n
    event: "${str}",\n
    time: "${today}",\n
    payload: {\n
        store: "${payload.store}", \n
        orderId: "${payload.orderId}", \n
        customer: "${payload.customer}", \n
        address: "${payload.address}", \n
    },
  }`);
}
module.exports = {
  parcelReady, 
  onRoute, 
  packageDelivered,
};