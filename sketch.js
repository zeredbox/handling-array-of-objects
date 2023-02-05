// array "rectangles" to contain all rectangles objects
const rectangles = [];

function setup() {
  createCanvas(400, 400);

  // Create the rectangles
  for (let i = 0; i < 20; i++) {
    let x = random(0, 350);
    let y = random(0, 350);
    let w = random(5, 150);
    let h = random(5, 150);
    let rectangle = new Rectangle({ x, y, w, h });
    rectangles.push(rectangle);
  }
}

function draw() {
  background(240);

  // Draw rectangles
  rectangles.forEach((rectangle) => {
    rectangle.draw();
  });

  //Draw border
  noFill();
  rect(0, 0, width, height);
}

// Trigger mousePressed to eventually delete a rectangle
function mouseClicked() {
  let i = 0;
  rectangles.forEach((rectangle) => {
    // Analyse each rectangle
    rectangles[i].delete(i, rectangles);
    i++;
  });
}

// Trigger doubleClicked to add a new rectangle
function doubleClicked() {
  let x = mouseX;
  let y = mouseY;
  let w = random(5, 100);
  let h = random(5, 100);
  let rectangle = new Rectangle({ x, y, w, h });
  // Save the new rectangle in the array
  rectangles.push(rectangle);
}
