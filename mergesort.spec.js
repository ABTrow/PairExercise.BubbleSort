describe('Split Array Function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3,4,5,6,7])).toEqual([[3, 4], [5, 6, 7]]);
  });
  it('works with even number of items', function () {
    expect(split([3,4,5,6])).toEqual([[3, 4], [5, 6]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2,5], [3,6])).toEqual([2,3,5,6]);
  });
  it('merges arrays of different lengths',
  function() {
    expect(merge([2,5,5,7,8,10,12],[3,7])).toEqual([2,3,5,5,7,7,8,10,12]);
  });
  it('handles empty arrays',
  function() {
    expect(merge([],[2,4])).toEqual([2,4]);
  });
});

describe('MergeSort Function', function(){
  it('merges and sorts stuff',
  function() {
    expect(mergeSort([12,4,1,2])).toEqual([1, 2, 4, 12]);
  });
});
