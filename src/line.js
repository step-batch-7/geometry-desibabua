const arePointsEqual = (point1, point2) =>
  point1.x === point2.x && point1.y === point2.y;

class Line {
  constructor(endA, endB) {
    [this.endA, this.endB] = [{ ...endA }, { ...endB }];
  }

  get toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `Line :- ${endA},${endB}`;
  }

  isEqualTo(anotherLine) {
    if (anotherLine instanceof Line) {
      return (
        arePointsEqual(this.endA, anotherLine.endA) &&
        arePointsEqual(this.endB, anotherLine.endB)
      );
    }
    return false;
  }
}

module.exports = { Line };
