const Point = require("../src/point");
const Line = require("../src/line");

class Rectangle {
  #pointB;
  #pointD;
  constructor(point1, point2) {
    this.pointA = new Point(point1.x, point1.y);
    this.#pointB = new Point(point2.x, point1.y);
    this.pointC = new Point(point2.x, point2.y);
    this.#pointD = new Point(point1.x, point2.y);
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointC.x},${this.pointC.y})]`;
  }

  get area() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      (this.pointA.isEqualTo(other.pointA) &&
        this.pointC.isEqualTo(other.pointC)) ||
      (this.pointA.isEqualTo(other.pointC) &&
        this.pointC.isEqualTo(other.pointA))
    );
  }

  hasPoint(point) {
    if(!(point instanceof Point)) return false
    return (
      point.isOn(new Line(this.pointA, this.#pointB)) ||
      point.isOn(new Line(this.#pointB, this.pointC)) ||
      point.isOn(new Line(this.pointC, this.#pointD)) ||
      point.isOn(new Line(this.#pointD, this.pointA))
    );
  }
}
module.exports = Rectangle;
