class Line {
  constructor(a, b, c, d) {
    this.A = [];
    this.A.push(a);
    this.A.push(b);
    this.B = [];
    this.B.push(c);
    this.B.push(d);
  }
  get toString(){
    return `{A : [${this.A[0]},${this.A[1]}] ,B : [${this.B[0]},${this.B[1]}] }`
  }
  isEqualto(anotherLine){
    return this.A[0]==anotherLine.A[0] && this.A[1]==anotherLine.A[1] &&this.B[0]==anotherLine.B[0] &&this.B[1]==anotherLine.B[1]
  }
}

module.exports = { Line };
