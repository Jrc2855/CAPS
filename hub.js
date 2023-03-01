'use strict';

let eventPool = require('./eventPool');

//-----handlers-----//
const { createPackage, confirmDelivery } = require('./clients/vendor/handler');
const { parcelReady, onRoute, packageDelivered } = require('./clients/driver/handler');

//-----listeners-----//

eventPool.on('Step 1', createPackage);
eventPool.on('Step 2', parcelReady);
eventPool.on('Step 3', onRoute);
eventPool.on('Step 4', packageDelivered);
eventPool.on('Step 5', confirmDelivery);

setInterval(() => {
  let store = 'test';
  eventPool.emit('Step 1', store);
}, 5000);