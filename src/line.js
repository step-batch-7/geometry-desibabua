"use strict";
const { Point } = require("./point");

const arePointsEqual = (pointA, pointB) =>
  pointA.x === pointB.x && pointA.y === pointB.y;

const getIntercept = function(slope, x, y) {
  return y - slope * x;
};

const isNumberInRange = function(number, rangeA, rangeB) {
  const [start, end] = [rangeA, rangeB].sort();
  return number > start && number < end;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      (arePointsEqual(this.endA, other.endA) &&
        arePointsEqual(this.endB, other.endB)) ||
      (arePointsEqual(this.endA, other.endB) &&
        arePointsEqual(this.endB, other.endA))
    );
  }

  get length() {
    return Math.hypot(this.endB.x - this.endA.x, this.endB.y - this.endA.y);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(other) {
    const linesIntercept = getIntercept(this.slope, this.endA.x, this.endA.y);
    const othersIntercept = getIntercept(
      other.slope,
      other.endA.x,
      other.endA.y
    );
    return (
      other instanceof Line &&
      linesIntercept !== othersIntercept &&
      this.slope === other.slope
    );
  }

  findX(y) {
    if (!isNumberInRange(y, this.endA.y, this.endB.y)) return NaN;
    if (this.slope === Infinity || this.slope === -Infinity) return this.endA.x;
    const intercept = getIntercept(this.slope, this.endA.x, this.endA.y);
    return (y - intercept) / this.slope;
  }

  findY(x) {
    if (!isNumberInRange(x, this.endA.x, this.endB.x)) return NaN;
    const intercept = getIntercept(this.slope, this.endA.x, this.endA.y);
    return this.slope * x + intercept;
  }

  split() {
    const middleX = (this.endA.x + this.endB.x) / 2;
    const middleY = (this.endA.y + this.endB.y) / 2;
    const midPoint = { x: middleX, y: middleY };
    return [new Line(this.endA, midPoint), new Line(midPoint, this.endB)];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const isXInRange = isNumberInRange(point.x, this.endA.x, this.endB.x);
    const isYInRange = isNumberInRange(point.y, this.endA.y, this.endB.y);
    if (!isXInRange || !isYInRange) return false;
    const linesIntercept = getIntercept(this.slope, this.endA.x, this.endA.y);
    return point.y === this.slope * point.x + linesIntercept;
  }
}

module.exports = { Line };
