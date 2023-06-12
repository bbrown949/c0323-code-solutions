/* exported Shape */

// new class named Shape
// area and perimiter are properties of shape
// constructor with 2 parameters
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'The area is ' + this.area + ' and the perimeter is ' + this.perimeter + '.';
  }
}
const instance = new Shape(45, 20);

console.log('instanceShape: ', instance);
console.log(instance.describe());
