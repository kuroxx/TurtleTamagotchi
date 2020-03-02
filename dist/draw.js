/* ------------------------------
    To preload turtle
------------------------------ */
var turtleBody = [];
var turtleHead;

function loadTurtle() {

  var turtleHeadNames = ["turtleHeadHappy.png", "turtleHeadNormal.png", "turtleHeadSad.png"];

  turtleHead = turtleHeadNames.map(function(name) {
    return loadImage("assets/turtle/" + name);
  });

  for (var i = 0; i < 5; i++) {
    turtleBody.push(loadImage('assets/turtle/turtleBody' + i + '.png'));
  }

  heart = loadImage("assets/heart.png");
}
/* ------------------------------
    Draw interface
------------------------------ */
function drawInterface() {
  drawBorders();
  drawButtons();
  drawTurtle();
  drawHappinessBar();
}

/* ------------------------------
    Draw turtle animation
------------------------------ */
var xPos = 200;
var speed = 6;

function drawTurtle() {

  // Increment xPos 
  xPos += speed;

  if (xPos > width * 0.73 || xPos < 50) {
    speed = -speed;
  }

  var turtleHeadImg = getTurtleHead();
  var turtleBodyImg = getTurtleBody();

  // Calculate head alignment
  var xOffsetHead = (turtleBodyImg.width - turtleHeadImg.width) / 2;

  image(turtleHeadImg, xPos + xOffsetHead, 300);

  // Overlap turtle head onto body due to extra line in image
  image(turtleBodyImg, xPos, 290 + turtleHeadImg.height);
}

function getTurtleHead() {
  if ((happiness / maxHappiness) >= 0.8) {
    // Happy turtle head
    return turtleHead[0];

  } else if ((happiness / maxHappiness) >= 0.5) {
    // Neutral turtle head
    return turtleHead[1];

  } else {
    // Sad turtle head
    return turtleHead[2];
  }
}

var lastRightFootPositionDown = true;

function getTurtleBody() {

  var retTurtleBody;

  if (speed < 1) {

    // Turtle face left feet animation
    if (lastRightFootPositionDown) {
      retTurtleBody = turtleBody[0];
    } else {
      retTurtleBody = turtleBody[1];
    }

  } else {

    // Turtle face right feet animation
    if (lastRightFootPositionDown) {
      retTurtleBody = turtleBody[2];
    } else {
      retTurtleBody = turtleBody[3];
    }
  }

  lastRightFootPositionDown = !lastRightFootPositionDown;
  return retTurtleBody;
}

/* ------------------------------
    Bars, Borders and Buttons
------------------------------ */
function drawHappinessBar() {
  image(heart, 50, 40);
  fill(512 * (1 - (log(happiness + 1) / log(100))), 255 * (log(happiness + 1) / log(51)), 0);
  rect(130, 60, (happiness / 50.0) * 250, 20);
}

function drawBorders() {
  background(0, 200, 200);
  fill(255);
  noStroke();
  rect(35, 35, width * 0.9, height * 0.7);

  textSize(30);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("Happy Turtle", width / 2, height * 0.8);
}

function drawButtons() {
  buttonEat.draw();
  buttonSleep.draw();
  buttonBath.draw();
  buttonPlay.draw();
}