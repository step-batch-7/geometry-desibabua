"use strict";
const { Point } = require("./point");

const arePointsCollinear = function(point1, point2, point3) {
  const [x1, x2, x3] = [point1.x, point2.x, point3.x];
  const [y1, y2, y3] = [point1.y, point2.y, point3.y];
  return 0 === (1 / 2) * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
};

const isNumberInRange = function(number, rangeA, rangeB) {
  const [start, end] = [rangeA, rangeB].sort();
  return number >= start && number <= end;
};

const getPoint = function(ratio, point1, point2) {
  if (ratio < 0 || ratio > 1) return null;
  const x = (1 - ratio) * point1.x + ratio * point2.x;
  const y = (1 - ratio) * point1.y + ratio * point2.y;
  return new Point(x, y);
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      (this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
      (this.endA.isEqualTo(other.endB) && this.endB.isEqualTo(other.endA))
    );
  }

  get length() {
    return Math.hypot(this.endB.x - this.endA.x, this.endB.y - this.endA.y);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      other instanceof Line &&
      !arePointsCollinear(this.endA, this.endB, other.endA)
    );
  }

  findX(y) {
    if (!isNumberInRange(y, this.endA.y, this.endB.y)) return NaN;
    if (this.slope === 0) return this.endA.x;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }

  findY(x) {
    if (!isNumberInRange(x, this.endA.x, this.endB.x)) return NaN;
    if (this.slope === Infinity || this.slope === -Infinity) return this.endA.y;
    return this.slope * (x - this.endA.x) + this.endA.y;
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
    return (
      isXInRange &&
      isYInRange &&
      arePointsCollinear(this.endA, this.endB, point)
    );
  }

  findPointFromStart(distance) {
    const totalLength = this.length;
    const lengthRatio = distance / totalLength;
    const [point1, point2] = [this.endA, this.endB];
    return getPoint(lengthRatio, point1, point2);
  }

  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = { Line };
