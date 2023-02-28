'use strict';
//vendor

const eventPool = require('../eventPool.js');

function createPackage() {
  let payload = {text: 'Their is a package ready for pickup!'};
  eventPool.emit('Step 2', payload);
}

function confirmDelivery() {
  setTimeout(() => {
    console.log('Thank you for ordering!');
  }, 4000);
}

module.exports = {
  createPackage,
  confirmDelivery,
};