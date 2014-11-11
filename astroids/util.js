var Asteroids = window.Asteroids || {};

Asteroids.Util = function () {};

Asteroids.Util.inherits = function (subClass, superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  subClass.prototype = new Surrogate();
};

Asteroids.Util.randomVec = function (length) {
  var dir = Asteroids.Util.unitVector([Asteroids.Util.randomGen(length, .5),
            Asteroids.Util.randomGen(length, .5)]);
  return [dir[0] * length, dir[1] * length]
};

Asteroids.Util.randomGen = function (max, scale) {
  var scale = scale || 0
  return Math.floor((Math.random() - scale) * max);
};

Asteroids.Util.randomColor = function () {
  return '#' + (Math.floor(Math.random() * 16777215)).toString(16);
};

Asteroids.Util.distanceBetween = function (pos1, pos2) {
  return Math.sqrt((pos1[0] - pos2[0]) * (pos1[0] - pos2[0]) + (pos1[1] - pos2[1]) * (pos1[1] - pos2[1]))
}

Asteroids.Util.unitVector = function (vector) {
  // Direction defaults to 0 if absolute value is undefined
  var yDir = vector[0] / Math.abs(vector[0]) || 0
  var xDir = vector[1] / Math.abs(vector[1]) || 0
  var squaredLength = (vector[0] * vector[0]) + (vector[1] * vector[1]);
  return [ yDir * ((vector[0] * vector[0]) / squaredLength), xDir * ((vector[1] * vector[1]) / squaredLength)];
}