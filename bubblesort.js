//[2, 1, 4, 3]

//for 8 numbers, go through

function bubbleSort(array) {
  let arrLength = 0;
  let swapCount = 0;
  for (let j = 0; j < array.length - 1; j++) {
    console.log(`#${arrLength}, ${array}`);
    arrLength++;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(i, array);
        swapCount++;
        console.log("swapCount: ", swapCount);
      }
    }
  }

  return array;
}

function swap(index, array) {
  const firstNumber = array[index];
  const secondNumber = array[index + 1];
  array.splice(index, 1, secondNumber);
  array.splice(index + 1, 1, firstNumber);
  return array;
}
