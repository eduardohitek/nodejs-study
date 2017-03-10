let app = require('./config/server');

let server = app.listen(1717, function(){
  console.log('Servidor Online!');
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
  console.log('Usuário Connected!');

  socket.on('disconnect', function(){
    console.log('Usuário desconectou!');
  });
});
