var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var dan = {'name':'Dan'};
var spike = {'name':'Spike'};

describe("Socket Server",function(){

  it('allows 1 user to connect', function(done){
    var numUsers = 0;
    var danClient = io.connect(socketURL, options);

    danClient.on('connect', function(data){
      numUsers += 1;
      expect(numUsers).toEqual(1);
      danClient.disconnect();
      done();
    });
  });
});
