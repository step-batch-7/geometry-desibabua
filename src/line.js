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

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length(){
    const horDistanceBetweenPoints = Math.abs(this.endA.y - this.endB.y)
    const vertDistanceBetweenPoints = Math.abs(this.endB.x - this.endA.x)
    return Math.hypot(horDistanceBetweenPoints,vertDistanceBetweenPoints)
  }

  get slope(){
    const horDistanceBetweenPoints = Math.abs(this.endA.y - this.endB.y)
    const vertDistanceBetweenPoints = Math.abs(this.endB.x - this.endA.x)
    return vertDistanceBetweenPoints/ horDistanceBetweenPoints
  }
}

module.exports = { Line };
