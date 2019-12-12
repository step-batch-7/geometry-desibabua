const assert = require("chai").assert;
const { Line } = require("../src/line");

describe("test for line class", function() {
  describe("to String", function() {
    it("should return same string representation of Line object when called with same args", function() {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = firstLine.toString;
      const expectedValue = secondLine.toString;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should return different string representation of Line object when called with same args", function() {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      const actualValue = firstLine.toString;
      const expectedValue = secondLine.toString;
      assert.notEqual(actualValue, expectedValue);
    });
  });

  describe("isEqualTo", function() {
    it("should validate another line object called with same args", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(actualValue);
    });

    it("should invalidate another line object called with different args", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(!actualValue);
    });

    it("should invalidate with another similar object but not the instance of Line", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(!actualValue);
    });
  });
});
