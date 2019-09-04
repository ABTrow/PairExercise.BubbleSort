function split(wholeArray) {

  const halfway = Math.floor(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, halfway);
  const secondHalf = wholeArray.slice(halfway);


  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let solution = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      solution.push(arr1[index1]);
      index1++;
    } else {
      solution.push(arr2[index2]);
      index2++;
    }
  }
  if (index1 >= arr1.length) {
    solution = solution.concat(arr2.slice(index2));
  } else if (index2 >= arr2.length) {
    solution = solution.concat(arr1.slice(index1));
  }

  return solution;
};

function mergeSort(array) {
  console.log('merge sorting: ', array);
  if (array.length === 1) {
    console.log('exit condition!');
    return array;
  } else {
    const separated = split(array);
    const firstHalf = separated[0];
    const secondHalf = separated[1];
    console.log('unsorted first half:', firstHalf, 'unsorted second half:', secondHalf);

    let sortedFirstHalf = mergeSort(firstHalf);
    console.log('in between halves:', firstHalf, secondHalf);
    let sortedSecondHalf = mergeSort(secondHalf);
    console.log('sorted first half:', sortedFirstHalf, 'sorted second half:', sortedSecondHalf);

    let merged = merge(sortedFirstHalf, sortedSecondHalf);
    console.log('merged:', merged);
    return merged;
  }

}
