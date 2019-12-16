const assert = require("chai").assert;
const { Circle } = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give correct representation of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5]");
    });
  });
});
