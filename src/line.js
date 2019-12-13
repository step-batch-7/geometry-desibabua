const isPointsEqual = (point1, point2) =>
  point1.x === point2.x && point1.y === point2.y;

const isTypeSimilar = (line1, line2) =>
  line1 instanceof Line && line2 instanceof Line;

class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }

  get toString() {
    return `Line :- (${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(anotherLine) {
    return (
      isPointsEqual(this.endA, anotherLine.endA) &&
      isPointsEqual(this.endB, anotherLine.endB) &&
      isTypeSimilar(this, anotherLine)
    );
  }
}

module.exports = { Line };
