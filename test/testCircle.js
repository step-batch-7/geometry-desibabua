const assert = require("chai").assert;
const { Circle } = require("../src/circle");

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
});
