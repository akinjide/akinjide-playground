var app = require('http').createServer(handler);
app.listen(8088);
var io = require('socket.io').listen(app);
var redis = require('redis');
var fs = require('fs');

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    console.log('Listening on port 8088');
    res.end(data);
  });
}

var store = redis.createClient();
var pub = redis.createClient();
var sub = redis.createClient();

io.sockets.on('connection', function (socket) {
  var user;

  sub.subscribe('chatting');
  sub.on('message', function (channel, message) {
    console.log('message recieved on server from publish');
    socket.send(message);
  });

  socket.on('message', function (msg) {
    console.log(msg);
    if (msg.type == 'chat') {
      pub.publish('chatting', msg.message);
    }
    else if (msg.type == 'setUsername') {
      user = msg.user;
      pub.publish('chatting', ' A new user in connected: ' + msg.user);
      store.sadd('onlineUsers', msg.user);
    }
  });

  socket.on('disconnect', function() {
    pub.publish('chatting', ' User is disconnected: ' + socket.id);
    store.srem('onlineUsers', user);
  
    sub.quit();
  });
});
