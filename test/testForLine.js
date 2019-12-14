const assert = require("chai").assert;
const { Line } = require("../src/line");
const { Point } = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give expected representation of line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = line.toString;
      const expectedValue = "[Line (1,2) to (3,4)]";
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

    it("should invalidate with another similar object but not the instance of Line but having keys of Line", () => {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.isNotOk(actualValue);
    });

    it("should invalidate with another type but not the instance of Line but having no keys", () => {
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

    it("should give slope of a given line parallel to y - axis", function() {
      line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give slope of a given line parallel to x - axis", function() {
      line = new Line({ x: 1, y: 0 }, { x: 6, y: 0 });
      assert.strictEqual(line.slope, 0);
    });
  });

  describe("isParallelTo", function() {
    it("should validate parallel lines if they are of same instance", function() {
      let line1 = new Line({ x: 0, y: 8 }, { x: 0, y: 4 });
      let line2 = new Line({ x: 4, y: 4 }, { x: 4, y: 0 });
      assert.strictEqual(line1.isParallelTo(line2), true);
    });

    it("should inValidate unParallel lines if they are of same instance", function() {
      let line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 2 });
      let line2 = new Line({ x: 4, y: 9 }, { x: 4, y: 0 });
      assert.strictEqual(line1.isParallelTo(line2), false);
    });

    it("should inValidate parallel lines if they are of different instance", function() {
      let line1 = new Line({ x: 0, y: 8 }, { x: 0, y: 4 });
      let line2 = { endA: { x: 0, y: 8 }, endB: { x: 0, y: 4 } };
      assert.strictEqual(line1.isParallelTo(line2), false);
    });

    it("should inValidate same line segment (overlapping)", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      assert.strictEqual(line.isParallelTo(line), false);
    });

    it("should inValidate different line segment (overlapping)", function() {
      let line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      let line2 = new Line({ x: 2, y: 2 }, { x: 3, y: 3 });
      assert.strictEqual(line1.isParallelTo(line2), false);
    });
  });

  describe("findX", function() {
    it("should give x of given point having y only of a line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(2), 2);

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.strictEqual(line.findX(2), 2);
    });

    it("should give Nan when point is outside the line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.isNaN(line.findX(5));

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.isNaN(line.findX(5));
    });
  });

  describe("findY", function() {
    it("should give x of given point having x only of a line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(line.findY(3), 3);

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.strictEqual(line.findY(2), 2);
    });

    it("should give Nan when point is outside the line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.isNaN(line.findY(5));

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.isNaN(line.findY(5));
    });
  });

  describe("split", function() {
    it("should give splitted lines in an array", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      let splittedLines = line.split();
      let expectedSplittedLine1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      let expectedSplittedLine2 = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.isTrue(splittedLines[0].isEqualTo(expectedSplittedLine1));
      assert.isTrue(splittedLines[1].isEqualTo(expectedSplittedLine2));
    });
  });

  describe("hasPoint", function() {
    it("should validate point on a given line ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const point = new Point(2, 2);
      assert.isTrue(line.hasPoint(point));
    });
  });
});
