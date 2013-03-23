/* Orbit -- lots of copyright and otherstuff will go here eventually. */



// RequestAnimationFrame shim

var requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(callback) {
           window.setTimout(callback, 1000 / 60);
         };
}());

// Create the canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Main game loop
var lastTime;
function main() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;

  update(dt);
  render();

  lastTime = now;
  requestAnimFrame(main);
}

function init() {
  
  // Game initialization stuff here!
  backgroundPattern = context.createPattern(resources.get('img/game-background.png'), 'repeat');
  document.getElementById('play-again').addEventListener('click', function() { reset(); });

  reset();

  lastTime = Date.now();
  main();
}

// Load assets
resources.load([
    'img/sprites.png',
    'img/game-background.png'
]);
resources.onReady(init);

var player = {
      pos: [0, 0],
      sprite: new Sprite('img/sprites.png', [0, 0], [39, 39], 16, [0, 1])
};

var bullets = [];
var enemies = [];
var explosions = [];

var lastFire = Date.now();
var gameTime = 0;
var isGameOver;
var backgroundPattern;

// Score stuff
var score = 0;
var scoreEl = document.getElementById('score');
