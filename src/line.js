const arePointsEqual = (pointA, pointB) =>
  pointA.x === pointB.x && pointA.y === pointB.y;

const getYIntercept = function(slope, x, y) {
  return y - slope * x;
};

const isNumberInRange = function(number, range1, range2) {
  return (
    (number > range1 && number < range2) || (number < range1 && number > range2)
  );
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  get toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length() {
    return Math.hypot(this.endB.x - this.endA.x, this.endB.y - this.endA.y);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallelTo(other) {
    const linesIntercept = getYIntercept(this.slope, this.endA.x, this.endA.y);
    const othersIntercept = getYIntercept(
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
    const intercept = getYIntercept(this.slope, this.endA.x, this.endA.y);
    return (y - intercept) / this.slope;
  }

  findY(x) {
    if (!isNumberInRange(x, this.endA.x, this.endB.x)) return NaN;
    const intercept = getYIntercept(this.slope, this.endA.x, this.endA.y);
    return this.slope * x + intercept;
  }

  split() {
    const xOfMidPoint = (this.endA.x + this.endB.x) / 2;
    const yOfMidPoint = (this.endA.y + this.endB.y) / 2;
    return [
      new Line(
        { x: this.endA.x, y: this.endA.y },
        { x: xOfMidPoint, y: yOfMidPoint }
      ),
      new Line(
        { x: xOfMidPoint, y: yOfMidPoint },
        { x: this.endB.x, y: this.endB.y }
      )
    ];
  }

  hasPoint(point) {
    if (!isNumberInRange(point.x, this.endA.x, this.endB.x)) return false;
    if (!isNumberInRange(point.y, this.endA.y, this.endB.y)) return false;
    const linesIntercept = getYIntercept(this.slope, this.endA.x, this.endA.y);
    return point.y === this.slope * point.x + linesIntercept;
  }
}

module.exports = { Line };
