const isPointsEqual = (point1, point2) =>
  point1[0] === point2[0] && point1[1] === point2[1];

const isTypeSimilar = (line1, line2) =>
  line1 instanceof Line && line2 instanceof Line;

class Line {
  constructor(a, b, c, d) {
    [this.endA, this.endB] = [
      [a, b],
      [c, d]
    ];
  }
  get toString() {
    return `Line :- (${this.endA[0]},${this.endA[1]}),(${this.endB[0]},${this.endB[1]})`;
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
