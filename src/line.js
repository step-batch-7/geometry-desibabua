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
      this.endA[0] == anotherLine.endA[0] &&
      this.endA[1] == anotherLine.endA[1] &&
      this.endB[0] == anotherLine.endB[0] &&
      this.endB[1] == anotherLine.endB[1]
    );
  }
}

module.exports = { Line };
