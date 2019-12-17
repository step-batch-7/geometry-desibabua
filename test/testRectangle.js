const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

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
});
