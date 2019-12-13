const isPointsEqual = (point1, point2) =>
  point1.x === point2.x && point1.y === point2.y;

class Line {
  constructor(endA, endB) {
    [this.endA,this.endB] = [{ ...endA },{ ...endB }];
  }

  get toString() {
    return `Line :- (${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(anotherLine) {
    return (
      anotherLine instanceof Line &&
      isPointsEqual(this.endA, anotherLine.endA) &&
      isPointsEqual(this.endB, anotherLine.endB)
    );
  }
}

module.exports = { Line };
