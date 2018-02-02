/**************************************************
** Server init
**************************************************/
var express = require('express'),
	app = express(),
	server = require('http').Server(app),
	socket = require('socket.io').listen(server);

// Serving static files, so we can access all the files under public folder
app.use(express.static(__dirname + '/public'));

// Make the http server listen on stated port
server.listen(3000, "118.201.231.134",  function() {
	console.log("Office-Break-2 server is up and running.");
});

// Get the root url and import the html file
// Act like routes
app.get('/', function(req, res) { res.sendFile(__dirname + '/public/index.html'); })


/**************************************************
** Global variables
**************************************************/
var clients = {},
	players = {};


/**************************************************
** Event Handlers
**************************************************/
socket.on('connection', function(client) {
	console.log('-> New player has connected: ' + client.id);
	clients[client.id] = client; /* Save the connected client */

  	client.on('new player', onNewPlayer)
  	client.on('moving player', onMovinglayer)
	client.on('disconnect', onClientDisconnect)

});


/**************************************************
** Functions
**************************************************/
function onClientDisconnect() {
	if clients[this.id] delete clients[this.id];
	if players[this.id] delete players[this.id];

	this.broadcast.emit('player disconnected', this.id);
	console.log('<- Player has disconnected: ' + this.id);
}