const assert = require("chai").assert;
const { Line } = require("../src/line");
console.log(Line);
describe("test for line class", function() {
  describe("to String", function() {
    it("toString property should behave in same ways when called by class which is called by same args", function() {
      const actualValue = new Line(1, 2, 3, 4);
      const expectedValue = new Line(1, 2, 3, 4);
      assert.deepStrictEqual(actualValue.toString, expectedValue.toString);
    });

    it("toString property should not behave in same ways when called by class which is called by different args", function() {
      const actualValue = new Line(1, 2, 3, 4);
      const expectedValue = new Line(1, 2, 3, 5);
      assert.notEqual(actualValue.toString, expectedValue.toString);
    });
  });

  describe("isEqualTo", function() {
    it("should check with another line object ", () => {
      const actualValue = new Line(1, 2, 3, 4);
      const anotherLine = new Line(1, 2, 3, 4);
      assert.equal(actualValue.isEqualTo(anotherLine), true);
    });

    it("should check with another line object ", () => {
      const actualValue = new Line(1, 2, 3, 4);
      const anotherLine = new Line(1, 2, 3, 5);
      assert.equal(actualValue.isEqualTo(anotherLine), false);
    });
  });
});
