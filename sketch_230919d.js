//float diameter ;

var circleCount;
var tileWidth;
var tileHeight;
var endSize;
var endOffset = 200;

var tileCountX = 8;
var tileCountY = 8;

function setup() {
  createCanvas(window.screen.width, window.screen.height-150);
  // createCanvas( 800, 800);

  noFill();
  stroke("#c0c0c0");
  strokeWeight(1);

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  tileHeight = tileWidth;
}

function draw() {
  background(0, 0, 0);

  random(0);
  translate(tileWidth / 2, tileHeight / 2);

  let endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
  let endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
  let circleCount = mouseX / 40 + 1;

  for (let gridX = 0; gridX <= tileCountX; gridX++) {
    for (let gridY = 0; gridY <= tileCountX; gridY++) {

      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      for (let i = 0; i < circleCount; i++) {
        //float diameter = map( i, 0, 20, 600, 100 );
        //float offiset = map( i, 0, 20 , 0, 200 );
        let diameter = map(i, 0, circleCount, tileWidth, endSize);
        let offiset = map(i, 0, circleCount, 0, endOffset);
        ellipse(offiset, 0, diameter, diameter);
      }
      pop();
    }
  }
}
