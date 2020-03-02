var state = 0;

// Images created using pixelartmaker.com
function preload() {
  loadTurtle();
};

function setup() {
  // Speed of turtle animation
  frameRate(15);
  createCanvas(700, 700);
}

function draw() {
  if (state == 0) {
    startScreen();
  } else if (state == 1) {
    playScreen();
  } else if (state == 2) {
    endScreen();
  } else if (state == 3) {
    instructionScreen();
  }
}