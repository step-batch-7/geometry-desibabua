const assert = require("chai").assert;
const { Circle } = require("../src/circle");
const { Point } = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it("should give correct representation of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5]");
    });
  });

  describe("isEqualTo", function() {
    it("should validate two circle having same centre and radius", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });

    it("should invalidate two circle having same centre and radius but not of same instance", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = { center: { x: 0, y: 0 }, radius: 5 };
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });

  describe("area", function() {
    it("should give area of a circle of given radius", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.approximately(circle.area, 154, 0.5);
    });

    it("should give 0 as area of a circle of radius zero", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of a circle of given radius", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.approximately(circle.perimeter, 44, 0.5);
    });
  });

  describe("hasPoint", function() {
    it("should validate point which is on circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const point = new Point(0, 7);
      assert.isTrue(circle.hasPoint(point));
    });

    it("should invalidate point which is not a instance of point", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      let point = {x:0,y:7}
      assert.isFalse(circle.hasPoint(point));
      
      point = "";
      assert.isFalse(circle.hasPoint(point));
    });
  });
});
