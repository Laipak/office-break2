/**************************************************
** Global Variables
**************************************************/
var socket = io();			// Socket connection 

var game,			// Phaser game context
	land,			// Land for Phaser
	canvasWidth,	// Canvas width
	canvasHeight,	// Canvas height
	wrapper;		// Canvas wrapper DOM element


$(document).ready(function() {
	$('#game-wrapper').hide();

	// Generate name for new player (populate the input)
	$('#player-name').val(generateNewName());
	$("#join-game-btn").removeAttr('disabled');

	// Get new random name
	$('#refresh-name').click(function() {
		$('#player-name').val(generateNewName());
	});

	setClickHandlers();
});


/**************************************************
** Click handlers
**************************************************/
function setClickHandlers() {

	$("#join-game-btn").click(function() {
		var name = $("#player-name").val();
		if (name != "") {
			socket.emit("join", name);
			$("#login").hide();
			$("#game-wrapper").show();
		}
	});
}


/**************************************************
** Helpers
**************************************************/
function generateNewName() { /* Pass in True to return only one name*/
	var i = Math.floor(Math.random() * names.length);
	var j = Math.floor(Math.random() * names.length);
	
	return names[i] + names[j];
}