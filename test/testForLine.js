const assert = require("chai").assert;
const { Line } = require("../src/line");

describe("test for line class", function() {
  describe("to String", function() {
    it("toString property should behave in same ways when called by class which is called by same args", function() {
      const actualValue = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expectedValue = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.deepStrictEqual(actualValue.toString, expectedValue.toString);
    });

    it("toString property should not behave in same ways when called by class which is called by different args", function() {
      const actualValue = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expectedValue = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
      assert.notEqual(actualValue.toString, expectedValue.toString);
    });
  });

  describe("isEqualTo", function() {
    it("should validate with another line object  made with same args", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(actualValue);
    });

    it("should not validate with another line object made with different args", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(!actualValue);
    });

    it("should not validate with another similar type of object", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = { endA: { x: 1, y: 2 }, endB:{ x: 3, y: 4 } };
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(!actualValue);
    });
  });
});
