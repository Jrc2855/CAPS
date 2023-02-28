'use strict';

let eventPool = require('./eventPool');

//-----handlers-----//
const { createPackage, confirmDelivery } = require('./vendor/handler');
const { parcelReady, onRoute, packageDelivered } = require('./driver/handler');

//-----listeners-----//

eventPool.on('Step 1', createPackage);
eventPool.on('Step 2', parcelReady);
eventPool.on('Step 3', onRoute);
eventPool.on('Step 4', packageDelivered);
eventPool.on('Step 5', confirmDelivery);

setInterval(() => {
  let store = 'test';
  eventPool.emit('Step 1', store);
}, 10000);