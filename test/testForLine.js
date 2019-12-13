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

  describe("length", function() {
    it("should give length of a given line with positive values with exact length", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 3, y: 4 });
      assert.equal(line.length, 5);

      line = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      assert.equal(line.length, 4);

      line = new Line({ x: 2, y: 0 }, { x: 0, y: 0 });
      assert.notEqual(line.length, 4);
    });

    it("should give length of a given line with negative values with exact length", function() {
      let line = new Line({ x: 0, y: 0 }, { x: -3, y: 4 });
      assert.equal(line.length, 5);

      line = new Line({ x: 0, y: 0 }, { x: -3, y: -4 });
      assert.equal(line.length, 5);
    });

    it("should give length of a given line with positive values with floating type  length", function() {
      let line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.approximately(line.length, 2.8, 0.1);
    });

    it("should give length of a given line with negative values with floating type  length", function() {
      let line = new Line({ x: 1, y: -2 }, { x: -3, y: 4 });
      assert.approximately(line.length, 7.2, 0.1);
    });
  });

  describe("slope", function() {
    it("should give slope of a given line(exact value)", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give slope of a given line(floating value)", function() {
      line = new Line({ x: 0, y: 1 }, { x: 3, y: 0 });
      assert.approximately(line.slope, -0.33, 0.01);
    });
  });
});
