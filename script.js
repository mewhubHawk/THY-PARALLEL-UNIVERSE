var counter = 0;
var mercuryCounter = 0;
var venusCounter = 0;
var earthCounter = 0;
var marsCounter = 0;
var jupiterCounter = 0;
var saturnCounter = 0;
function movePlanets() {
  counter = counter + 1;
  mercuryCounter = 0.4 * counter * 365 / 88;
  venusCounter = 0.4 * counter * 365 / 225;
  earthCounter = 0.4 * counter * 365 / 365;
  marsCounter = 0.4 * counter * 365 / 687;
  jupiterCounter = 0.4 * counter * 365 / 4300;
  saturnCounter = 0.4 * counter * 365 / 11000;
  var mercuryX = calculateXPosition(mercuryCounter, 500, 100);
  var mercuryY = calculateYPosition(mercuryCounter, 500, 100);
  $("#mercury").attr("cx", mercuryX);
  $("#mercury").attr("cy", mercuryY);
  var venusX = calculateXPosition(venusCounter, 500, 160);
  var venusY = calculateYPosition(venusCounter, 500, 160);
  $("#venus").attr("cx", venusX);
  $("#venus").attr("cy", venusY);
  var earthX = calculateXPosition(earthCounter, 500, 220);
  var earthY = calculateYPosition(earthCounter, 500, 220);
  $("#earth").attr("cx", earthX);
  $("#earth").attr("cy", earthY);
  var marsX = calculateXPosition(marsCounter, 500, 280);
  var marsY = calculateYPosition(marsCounter, 500, 280);
  $("#mars").attr("cx", marsX);
  $("#mars").attr("cy", marsY);
  var jupiterX = calculateXPosition(jupiterCounter, 500, 350);
  var jupiterY = calculateYPosition(jupiterCounter, 500, 350);
  $("#jupiter").attr("cx", jupiterX);
  $("#jupiter").attr("cy", jupiterY);
  var saturnX = calculateXPosition(saturnCounter, 500, 450);
  var saturnY = calculateYPosition(saturnCounter, 500, 450);
  $("#saturn").attr("cx", saturnX);
  $("#saturn").attr("cy", saturnY);
}
function calculateXPosition(degrees, sunX, orbitRadius) {
  var velocity = degrees * (Math.PI / 180);
  return sunX + (orbitRadius * Math.cos(velocity));
}
function calculateYPosition(degrees, sunY, orbitRadius) {
  var velocity = degrees * (Math.PI / 180);
  return sunY + (orbitRadius * Math.sin(velocity));
}
setInterval(movePlanets, 100);
