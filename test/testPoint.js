const assert = require('chai').assert
const { Point } = require("../src/point");


describe("should give new point", function() {
  it("give_description", function() {
    const point = new Point(2, 3);
    assert.strictEqual(point.toString(), "[Point @(2,3)]");
  });
});
