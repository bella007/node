var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var person={}
var num =0
var online = []
io.on('connection', function(socket){
  num++
  person[socket.id]={
    username:'user'+num
  }

  
  online[socket.id]=person[socket.id]
  
  io.emit('onl-people', online);
  
    

  socket.on('chat message', function(msg){  
    io.emit('chat message', {userid:person[socket.id].username, msg:msg});
  });

  socket.on('disconnect', function(){
    console.log('user disconnect')
    
    socket.broadcast.emit('user live', {
      msg:'user live', 
      username:person[socket.id].username})
  
  num--;
    delete person[socket.id]
});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
