const arePointsEqual = (pointA, pointB) =>
  pointA.x === pointB.x && pointA.y === pointB.y;

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  get toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `Line :- ${endA},${endB}`;
  }

  isEqualTo(anotherLine) {
    if (!(anotherLine instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, anotherLine.endA) &&
      arePointsEqual(this.endB, anotherLine.endB)
    );
  }
}

module.exports = { Line };
