const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("return an array of the same length", () => {
    const testArray = ["a", "b", "c"]
    const result = shuffle(testArray)
    expect(result.length).toEqual(testArray.length)
  })

  test("check that all same items are in array", () => {
    const testArray = ["a", "b", "c"]
    const result = shuffle(testArray)
    expect(result).toContain("a")
    expect(result).toContain("b")
    expect(result).toContain("c")
  })

});
