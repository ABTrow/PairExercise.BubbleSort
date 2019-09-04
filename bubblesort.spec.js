describe("Bubble Sort", function() {
  // beforeAll(function() {
  //   spyOn(this, "swap").and.callThrough();
  // });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a single item", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it("handles multiple items", function() {
    expect(bubbleSort([8, 3, 2, 6, 4, 1, 7, 5])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });
  it("calls on the swap function ", function() {
    bubbleSort([2, 1, 4, 3]);
    expect(swap.calls.count()).toEqual(2);
  });
});
