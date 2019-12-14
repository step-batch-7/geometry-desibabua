const assert = require("chai").assert;
const { Point } = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give new point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });

  describe("value", function() {
    it("should give value of a point with given function reference", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.visit((x,y)=>x+y),5);
      assert.strictEqual(point.visit((x,y)=>x*y),6);
      assert.approximately(point.visit((x,y)=>x/y),0.66,0.1);
    });
  });
});
