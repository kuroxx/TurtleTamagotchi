/* ------------------------------
    Keyboard Interactions
------------------------------ */
function keyPressed() {
  // Start Screen
  if (keyCode === BACKSPACE && state != 0) {
    state = 0;
  }
  // Play Screen
  if (keyCode === ENTER && state != 1) {
    state = 1;
  }
  // Instruction Screen
  if (keyCode === ESCAPE && state != 3) {
    state = 3;
  }
}
/* ------------------------------
    Happiness Bar 
------------------------------ */
var maxHappiness = 100;
var happiness = maxHappiness;

function happinessBar() {
  happiness = happiness - 0.1;

  if (happiness <= 0) {
    state = 2;
  }

  if (happiness > 100) {
    happiness = 100;
  }
}
/* ------------------------------
    Buttons
------------------------------ */
function button(_x, label) {
  var b = {
    x: _x,
    y: 590,
    width: 90,
    height: 90,
    draw: function() {
      // Outer square border
      fill(0, 150, 200);
      rect(this.x, this.y, this.width, this.height, 10);
      // Inner square
      fill(0, 100, 200);
      rect(this.x + (this.width * 0.2 / 2), this.y + (this.height * 0.2 / 2), this.width * 0.8, this.height * 0.8);
      // Text
      fill(222);
      textFont("Arial");
      textSize(25);
      textAlign(CENTER, CENTER);
      text(label, this.x + 45, this.y + 45);
    }
  }
  return b;
}

var buttonEat = button(70, "Eat");
var buttonSleep = button(230, "Sleep");
var buttonBath = button(390, "Bath");
var buttonPlay = button(550, "Play");

var buttonCooldown = 100;
var coolDown = false;
var fed = 0;
var played = 0;

function buttonPressed() {
  if (coolDown == true) {
    startCoolDown();
  }
}

function mousePressed() {
  // Eat (with feed count)
  if (mouseY > buttonEat.y && mouseY < buttonEat.y + buttonEat.height && mouseX > buttonEat.x && mouseX < buttonEat.x + buttonEat.width) {
    // If pet is fed consecutively over 3 times, decrease happiness
    if (fed > 3) {
      happiness -= 50;
    } else {
      happiness += random(5);
      fed++;
    }
  }

  // Bath (with cooldown)
  if (mouseY > buttonBath.y && mouseY < buttonBath.y + buttonBath.height && mouseX > buttonBath.x && mouseX < buttonBath.x + buttonBath.width && buttonCooldown == 100) {
    fed = 0; // Reset fed
    happiness += random(-20, 20);
    coolDown = true;
  }

  // Play (with play count)
  if (mouseY > buttonPlay.y && mouseY < buttonPlay.y + buttonPlay.height && mouseX > buttonPlay.x && mouseX < buttonPlay.x + buttonPlay.width) {
    fed = 0;
    // If pet plays consecutively for more than 4 times,
    // exhaustion causes decrease in happiness
    if (played > 4) {
      happiness -= 80;
    } else {
      happiness += random(10);
      played++;
    }
  }

  // Sleep (only if pet is tired from playing)
  if (mouseY > buttonSleep.y && mouseY < buttonSleep.y + buttonSleep.height && mouseX > buttonSleep.x && mouseX < buttonSleep.x + buttonSleep.width && played > 0) {
    // Reset fed and played
    fed = 0;
    played = 0;
    // Increase happiness
    happiness += random(20);
  }
}

function startCoolDown() {
  buttonCooldown--;
  buttonBath = button(390, buttonCooldown);
  console.log(buttonCooldown);

  // Reset button once countdown reaches 0
  if (buttonCooldown <= 0) {
    buttonCooldown = 100;
    buttonBath = button(390, "Bath");
    coolDown = false;
  }
}