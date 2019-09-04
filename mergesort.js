function split(wholeArray) {

  const halfway = Math.floor(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, halfway);
  const secondHalf = wholeArray.slice(halfway);


  return [firstHalf, secondHalf];
}

function defaultSearch (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function merge(arr1, arr2, func = defaultSearch) {
  let solution = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (func(arr1[index1], arr2[index2]) < 0) {
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

function mergeSort(array, func) {
  console.log('merge sorting: ', array);
  if (array.length === 1) {
    console.log('exit condition!');
    return array;
  } else {
    let [firstHalf, secondHalf] = split(array);
    console.log('unsorted first half:', firstHalf, 'unsorted second half:', secondHalf);

    let sortedFirstHalf = mergeSort(firstHalf, func);
    console.log('in between halves:', sortedFirstHalf, secondHalf);
    let sortedSecondHalf = mergeSort(secondHalf, func);
    console.log('sorted first half:', sortedFirstHalf, 'sorted second half:', sortedSecondHalf);

    let merged = merge(sortedFirstHalf, sortedSecondHalf, func);
    console.log('merged:', merged);
    return merged;
  }

}
