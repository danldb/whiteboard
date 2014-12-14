var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:3000';

var options = {
  transports: ['websockets'],
  'force new connection': true
};