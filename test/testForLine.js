const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give expected representation of line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actualValue = line.toString();
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

    it("should validate if equal lines are given with altered start and end", function() {
      const firstLine = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const secondLine = new Line({ x: 3, y: 4 }, { x: 1, y: 2 });
      const actualValue = firstLine.isEqualTo(secondLine);
      assert.ok(actualValue);
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
      let line = new Line({ x: 0, y: 1 }, { x: 3, y: 0 });
      assert.approximately(line.slope, -0.33, 0.01);
    });

    it("should give slope of a given line parallel to y - axis", function() {
      let line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.strictEqual(line.slope, Infinity);

      line = new Line({ x: 0, y: 5 }, { x: 0, y: 1 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give slope of a given line parallel to x - axis", function() {
      let line = new Line({ x: 1, y: 0 }, { x: 6, y: 0 });
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
      let line2 = new Line({ x: 0, y: 0 }, { x: 1, y: 3 });
      assert.strictEqual(line1.isParallelTo(line2), false);
    });

    it("should inValidate parallel lines if they are of different instance", function() {
      let line1 = new Line({ x: 0, y: 8 }, { x: 0, y: 4 });
      let line2 = { endA: { x: 0, y: 8 }, endB: { x: 0, y: 4 } };
      assert.strictEqual(line1.isParallelTo(line2), false);
    });

    it("should invalidate if two lines are not parallel", function() {
      const line1 = new Line({ x: 1, y: 6 }, { x: 2, y: 3 });
      const line2 = new Line({ x: -2, y: 10 }, { x: -9, y: 6 });
      assert.notOk(line1.isParallelTo(line2));
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

    it("should inValidate different line segment (overlapping)", function() {
      let line1 = new Line({ x: 2, y: 5 }, { x: 2, y: 7 });
      let line2 = new Line({ x: 2, y: 0 }, { x: 2, y: 4 });
      assert.isFalse(line1.isParallelTo(line2));
    });
  });

  describe("findX", function() {
    it("should give x of given point having y only of a line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(2), 2);

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.strictEqual(line.findX(2), 2);
    });

    it("should give x of first point when line is parallel to y axis", function() {
      let line = new Line({ x: 4, y: 0 }, { x: 4, y: 4 });
      assert.isNaN(line.findX(8));
      assert.isNaN(line.findX(-1));

      line = new Line({ x: 4, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(3), 4);
    });

    it("should give x of first point when line is parallel to x axis", function() {
      let line = new Line({ x: 0, y: 4 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(4), 0);
    });

    it("should give NaN when point is outside the line segment", function() {
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

    it("should give x of first point when line is parallel to y axis", function() {
      let line = new Line({ x: 4, y: 1 }, { x: 4, y: 4 });
      assert.strictEqual(line.findY(4), 1);
    });

    it("should give y of first point when line is parallel to x axis", function() {
      let line = new Line({ x: 4, y: 4 }, { x: 0, y: 4 });
      assert.isNaN(line.findY(8));
      assert.isNaN(line.findY(-1));

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 4 });
      assert.strictEqual(line.findY(3), 4);
    });

    it("should give Nan when point is outside the line segment", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.isNaN(line.findY(5));

      line = new Line({ x: 4, y: 4 }, { x: 0, y: 0 });
      assert.isNaN(line.findY(5));
    });
  });

  describe("split", function() {
    it("should give splitted lines of angled line", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      let [firstLine, secondLine] = line.split();
      let expectedFirstLine = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      let expectedSecondLine = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.isTrue(firstLine.isEqualTo(expectedFirstLine));
      assert.isTrue(secondLine.isEqualTo(expectedSecondLine));
    });

    it("should give splitted lines of horizontal line", function() {
      let line = new Line({ x: 1, y: 1 }, { x: 4, y: 1 });
      let [firstLine, secondLine] = line.split();
      let expectedFirstLine = new Line({ x: 1, y: 1 }, { x: 2.5, y: 1 });
      let expectedSecondLine = new Line({ x: 2.5, y: 1 }, { x: 4, y: 1 });
      assert.isTrue(firstLine.isEqualTo(expectedFirstLine));
      assert.isTrue(secondLine.isEqualTo(expectedSecondLine));
    });

    it("should give splitted lines of vertical line", function() {
      let line = new Line({ x: 1, y: 1 }, { x: 1, y: 4 });
      let [firstLine, secondLine] = line.split();
      let expectedFirstLine = new Line({ x: 1, y: 1 }, { x: 1, y: 2.5 });
      let expectedSecondLine = new Line({ x: 1, y: 2.5 }, { x: 1, y: 4 });
      assert.isTrue(firstLine.isEqualTo(expectedFirstLine));
      assert.isTrue(secondLine.isEqualTo(expectedSecondLine));
    });

    it("should give null when length of line is zero", function() {
      let line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.isNull(line.split());
    });
  });

  describe("hasPoint", function() {
    it("should validate point on the given line ", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const point = new Point(2, 2);
      assert.isTrue(line.hasPoint(point));
    });

    it("should invalidate point if it is not instance of Point", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      let point = "";
      assert.isFalse(line.hasPoint(point));

      line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      point = { x: 1, y: 1 };
      assert.isFalse(line.hasPoint(point));
    });

    it("should inValidate point it it is not on the given line ", function() {
      let line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      let point = new Point(5, 5);
      assert.isFalse(line.hasPoint(point));

      line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      point = new Point(1, 5);
      assert.isFalse(line.hasPoint(point));
    });
  });

  describe("findPointFromStart", function() {
    it("should give a point on line which is at given distance from start", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const point = new Point(3, 4);
      const returnedPoint = line.findPointFromStart(5);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give start point when the length is zero", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const point = new Point(0, 0);
      const returnedPoint = line.findPointFromStart(0);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give end point when the length is equal to total length", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const point = new Point(6, 8);
      const returnedPoint = line.findPointFromStart(10);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give Null when the length is large", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const returnedPoint = line.findPointFromStart(12);
      assert.isNull(returnedPoint);
    });
  });

  describe("findPointFromEnd", function() {
    it("should give a point on line which is at given distance from end", function() {
      const line = new Line({ x: 6, y: 8 }, { x: 0, y: 0 });
      const point = new Point(3, 4);
      const returnedPoint = line.findPointFromEnd(5);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give end point when the length is zero", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const point = new Point(6, 8);
      const returnedPoint = line.findPointFromEnd(0);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give start point when the length is equal to total length", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const point = new Point(0, 0);
      const returnedPoint = line.findPointFromEnd(10);
      assert.isTrue(point.isEqualTo(returnedPoint));
    });

    it("should give Null when the length is small", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 6, y: 8 });
      const returnedPoint = line.findPointFromEnd(-1);
      assert.isNull(returnedPoint);
    });
  });
});
