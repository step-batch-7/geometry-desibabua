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

  get perimeter() {
    const length = this.pointA.x - this.pointB.x;
    const width = this.pointA.y - this.pointB.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    return (
      (this.pointA.isEqualTo(other.pointA) &&
        this.pointB.isEqualTo(other.pointB)) ||
      (this.pointA.isEqualTo(other.pointB) &&
        this.pointB.isEqualTo(other.pointA))
    );
  }
}
module.exports = Rectangle;
