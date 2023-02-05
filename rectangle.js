// Class Rectangle
class Rectangle {
  // Constructor of the class
  constructor({ x, y, w, h }) {
    // Rectangle size
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // Rectangle random color
    this.colR = random(0, 255);
    this.colG = random(0, 255);
    this.colB = random(0, 255);
  }

  // Adding a method 'draw()' to the constructor
  draw() {
    // Set rectangles color and transparancy
    fill(this.colR, this.colG, this.colB, 150);
    rect(this.x, this.y, this.w, this.h);
  }

  // Adding a method 'delete(nb, recA)' to the constructor
  // Delete the rectangle number 'nb' in the array 'recA'
  delete(nb, recA) {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;

    // Test if clicked in a rectangle
    if (mouseX > this.x && mouseX < x2) {
      if (mouseY > this.y && mouseY < y2) {
        // Remove rectangle from array
        recA.splice(nb, 1);
      }
    }
  }
  
}
