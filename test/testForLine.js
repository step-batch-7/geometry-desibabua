const assert = require("chai").assert;
const Line = require("../src/line").Line;
console.log(Line);

describe("test line class", function() {

  it("should validate to string property when new line is called with different arguments", function() {
    const actualValue = new Line(1, 2, 3, 4);
    const expectedValue = new Line(1, 2, 3, 4);
    assert.deepStrictEqual(actualValue.toString, expectedValue.toString);
  });

  it("should not validate to string property when new line is called with different arguments", function() {
    const actualValue = new Line(1, 2, 3, 4);
    const expectedValue = new Line(1, 2, 3, 5);
    assert.notEqual(actualValue.toString, expectedValue.toString);
  });

  it("should check with another line object ",()=>{
    const actualValue = new Line(1,2,3,4)
    const anotherLine = new Line(1,2,3,4)
    assert.equal(actualValue.isEqualto(anotherLine),true)
  })

  it("should check with another line object ",()=>{
    const actualValue = new Line(1,2,3,4)
    const anotherLine = new Line(1,2,3,5)
    assert.equal(actualValue.isEqualto(anotherLine),false)
  })
});
