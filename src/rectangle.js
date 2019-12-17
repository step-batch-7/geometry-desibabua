const Point = require("../src/point");

class Rectangle {
  constructor(point1, point2) {
    this.pointA = new Point(point1.x, point1.y);
    this.pointB = new Point(point2.x, point2.y);
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointB.x},${this.pointB.y})]`;
  }

  get area() {
    const length = this.pointA.x - this.pointB.x;
    const width = this.pointA.y - this.pointB.y;
    return Math.abs(length * width);
  }
}

module.exports = Rectangle;
