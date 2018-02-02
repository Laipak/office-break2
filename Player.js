function Player(id, startX, startY, startAngle) {
  this.id = id;
  this.x = startX;
  this.y = startY;
  this.angle = startAngle;
}

Player.prototype.getX = function() { return this.x; }
Player.prototype.setX = function(newX) { this.x = newX; }

Player.prototype.getY = function() { return this.y; }
Player.prototype.setY = function(newY) { this.y = newY; }

Player.prototype.getAngle = function() { return this.angle; }
Player.prototype.setAngle = function(newAngle) { this.angle = newAngle; }

// Export the Player class so you can use it in
// other files by using require("Player")
module.exports = Player;
