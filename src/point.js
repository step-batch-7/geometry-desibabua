const arePointsEqual = (pointA, pointB) =>
  pointA.x === pointB.x && pointA.y === pointB.y;

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return arePointsEqual(this.x, other.y);
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionRef) {
    return functionRef(this.x, this.y);
  }
}

module.exports = { Point };
