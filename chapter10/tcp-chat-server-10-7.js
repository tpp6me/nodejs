var net= require('net');

var server = net.createServer();

server.on('connection', function(socket){
	socket.setEncoding('utf8');
	console.log('Got a new connection');
	socket.on('data', function(data){
		console.log('got data:', data.toString());
	})
}) 

server.on('error', function(err){
	console.log('Server error', err.message);
});

server.on('close', function(){
	console.log('Server closed');
});

server.listen(4001);

