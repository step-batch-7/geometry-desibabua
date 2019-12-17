const Point = require("../src/point");
const Line = require("../src/line");

const getSides = function(point1, point2) {
  const [pointA, pointC] = [point1, point2];

  const pointB = new Point(pointC.x, pointA.y);
  const pointD = new Point(pointA.x, pointC.y);
  
  const AB = new Line(pointA, pointB);
  const BC = new Line(pointB, pointC);
  const CD = new Line(pointC, pointD);
  const DA = new Line(pointD, pointA);

  return [AB, BC, CD, DA];
};

class Rectangle {
  constructor(point1, point2) {
    this.point1 = new Point(point1.x, point1.y);
    this.point2 = new Point(point2.x, point2.y);
  }

  toString() {
    return `[Rectangle (${this.point1.x},${this.point1.y}) to (${this.point2.x},${this.point2.y})]`;
  }

  get area() {
    const length = this.point1.x - this.point2.x;
    const width = this.point1.y - this.point2.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.point1.x - this.point2.x;
    const width = this.point1.y - this.point2.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      (this.point1.isEqualTo(other.point1) &&
        this.point2.isEqualTo(other.point2)) ||
      (this.point1.isEqualTo(other.point2) &&
        this.point2.isEqualTo(other.point1))
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const [AB, BC, CD, DA] = getSides(this.point1, this.point2);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }
}

module.exports = Rectangle;
