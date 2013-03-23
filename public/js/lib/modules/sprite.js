/**
 * Point class for pos property of Sprite
 *
 * @params x: x value of point
 * @params y: y value of point
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}
/**
 * Dimensions class for size property of Sprite
 *
 * @params width: width in pixels
 * @params height: height in pixels
 */
function Dimensions(width, height) {
  this.width = width;
  this.height = height;
}
/**
 * Sprite class
 *
 * @params options: options object for parameters
 *         options.pos: [Point] Point for top-left location of Sprite
 *         options.size: [Dimensions] Dimensions of object as {width, height}
 *         options.speed: [number] speed of sprite animation
 *         options.frames: [array] array of locations of frames in spritesheet
 *         options._index: [number] private variable containing current frame to render
 *         options.url: [string] url of spritesheet containing sprite
 *         options.dir: [string] direction that the sprite frames are laid out in the spritesheet
 *         options.once: [boolean] toggle between animating once or looping
 */
function Sprite(options) {
  this.pos = options.pos;
  this.size = options.size;
  this.speed = typeof options.speed === 'number' ? options.speed : 0;
  this.frames = options.frames;
  this._index = 0;
  this.url = options.url;
  this.dir = options.dir || 'horizontal';
  this.once = options.once;
}

Sprite.prototype.update = function(dt) {
  this._index = this.speed * dt;
}

Sprite.prototype.render = function(context) {
  var frame;

  if (this.speed > 0) {
    var max = this.frames.length;
    var index = Math.floor(this._index);
    frame = this.frames[index % max];

    if (this.once && index >= max) {
      this.done = true;
      return;
    }
  } else {
    frame = 0;
  }

  var x = this.pos.x;
  var y = this.pos.y;
}
