var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:3000';

var options = {
  transports: ['websockets'],
  'force new connection': true
};

var userName1 = 'Dan';

describe('Socket Server', function(){

  it('should add a single user', function(next){
    var connected = false;
    var user1 = io.connect(socketURL, options);
      user1.on('connect', function(){
        connected = true;
      });
    expect(connected).toBe(true);
    next();
  });

});