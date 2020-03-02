/* ------------------------------
    Game Screen States
------------------------------ */
function instructionScreen() {
  background(0, 200, 200);
  fill(255);
  textFont("Arial");
  textAlign(CENTER);

  textSize(50);
  text("Welcome to HAPPY TURTLE", width / 2, height / 3);
  image(heart, width / 2 - 40, height / 3 + 30);

  textSize(20);
  text("Maintain your pets happiness", width / 2, height / 2);
  text("(Click on the buttons provided to do so)", width / 2, height / 2 + 40);
  fill(210);
  text("* Pet can only sleep after you played with it", width / 2, height / 2 + 80);
  text("* Remember not to overfeed or exhaust your pet", width / 2, height / 2 + 100);
  text("(Press ENTER to play)", width / 2, height / 2 + 240);
  text("(Press BACKSPACE to return home)", width / 2, height / 2 + 270);

  fill(255);
  textSize(50);
  text("Enjoy playing!", width / 2, height / 2 + 190);
}

function startScreen() {
  background(0, 200, 200);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  textFont("Arial");

  text("Welcome to HAPPY TURTLE", width / 2, height / 2);
  textSize(30);
  text("( Press Enter to Begin )", width / 2, height / 2 + 60);
  text("( Press Esc for Instructions )", width / 2, height / 2 + 100);
}

function playScreen() {
  drawInterface();
  happinessBar();
  buttonPressed();
}

function endScreen() {
  background(0, 200, 200);
  fill(255);
  textSize(50);
  textFont("Arial");
  textAlign(CENTER);
  
  text("Your pet died :(", width / 2, height / 2);
}