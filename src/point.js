"use strict";

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x === other.x && this.y === other.y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(action) {
    return action(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return NaN;
    const horizontalDistance = otherPoint.x - this.x;
    const verticalDistance = otherPoint.y - this.y;
    return Math.hypot(horizontalDistance, verticalDistance);
  }

  isOn(other) {
    return other.hasPoint(this);
  }
}

module.exports = Point;
