const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", function() {
  it("should give toString representation of rectangle", function() {
    const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
    assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (5,4)]");
  });
});
