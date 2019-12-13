const assert = require("chai").assert;
const { Line } = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give expected representation of line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = line.toString;
      const expectedValue = "Line :- (1,2),(3,4)";
      assert.deepStrictEqual(actualValue, expectedValue);
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
      assert.isNotOk(actualValue);
    });

    it("should invalidate with another similar object but not the instance of Line", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.isNotOk(actualValue);
    });

    it("should invalidate with another type but not the instance of Line as well as Object", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = "";
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.isNotOk(actualValue);
    });
  });
});
