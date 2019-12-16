"use strict";

const arePointsEqual = (pointA, pointB) =>
  pointA.x === pointB.x && pointA.y === pointB.y;

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    const [pointA, pointB] = [this, other];
    return arePointsEqual(pointA, pointB);
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionRef) {
    return functionRef(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

module.exports = { Point };
