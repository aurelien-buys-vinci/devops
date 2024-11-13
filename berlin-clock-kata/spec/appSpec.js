const berlinClock = require('../app');

describe("Berlin Clock", () => {
  it("should have a function to convert time to Berlin Clock format", () => {
    expect(typeof berlinClock.convertTime).toBe("function");
  });
});
