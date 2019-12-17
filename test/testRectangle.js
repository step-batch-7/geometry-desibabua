const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should give toString representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (5,4)]");
    });
  });

  describe("area", function() {
    it("should give area of a rectangle when diagonal is inclined", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.strictEqual(rectangle.area, 12);
    });

    it("should give area of a rectangle when diagonal is with alternate length", function() {
      const rectangle = new Rectangle({ x: 5, y: 4 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.area, 12);
    });

    it("should give area  zero of a rectangle when diagonal is horizontal", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 8, y: 1 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should give area  zero of a rectangle when diagonal is vertical", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 8 });
      assert.strictEqual(rectangle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of a rectangle when diagonal is inclined", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.strictEqual(rectangle.perimeter, 14);
    });

    it("should give perimeter of a rectangle when diagonal is with alternate length", function() {
      const rectangle = new Rectangle({ x: 5, y: 5 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.perimeter, 16);
    });

    it("should give perimeter of a rectangle when diagonal is horizontal", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 8, y: 1 });
      assert.strictEqual(rectangle.perimeter, 14);
    });

    it("should give perimeter of a rectangle when diagonal is vertical", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 4 });
      assert.strictEqual(rectangle.perimeter, 6);
    });

    it("should give zero when length and breadth is zero", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.perimeter, 0);
    });
  });

  describe("isEqualTo", function() {
    it("should validate same rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate same rectangle with alternate rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 5, y: 4 }, { x: 1, y: 1 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate other rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 9, y: 4 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate rectangle if it of different instance and point instance are also different", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = { pointA: { x: 1, y: 1 }, pointB: { x: 5, y: 4 } };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate rectangle if it of different instance", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = { pointA: new Point(1, 1), pointB: new Point(5, 4) };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("hasPoint", function() {
    it("should validate if point is on rectangle's length", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      let point = new Point(3, 1);
      assert.isTrue(rectangle.hasPoint(point));

      point = new Point(3, 4);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should validate if point is on rectangle's width", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      let point = new Point(1, 3);
      assert.isTrue(rectangle.hasPoint(point));

      point = new Point(5, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should invalidate when point is not on the rectangle length or breadth", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 4 });
      let point = new Point(3, 1);
      assert.isFalse(rectangle.hasPoint(point));

      point = new Point(4, 7);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should invalidate when point is not the instance of point", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 4 });
      const point = { x: 1, y: 3 };
      assert.isFalse(rectangle.hasPoint(point));
    });
  });
});
