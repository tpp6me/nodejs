var net= require('net');

var server = net.createServer();

server.on('connection', function(socket){
	console.log('Got a new connection');
}) 

server.on('error', function(err){
	console.log('Server error', err.message);
});

server.on('close', function(){
	console.log('Server closed');
});

server.listen(4001);

