class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionRef){
    return functionRef(this.x,this.y)
  }
}

module.exports = { Point };
