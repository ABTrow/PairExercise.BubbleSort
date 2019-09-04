//[2, 1, 4, 3]

//for 8 numbers, go through

function bubbleSort(array) {
  let passCount = 1;
  let swapCount = 0;

  let swapped = true;

  for (let j = 0; j < array.length - 1; j++) {
    console.log(`Pass ${passCount}`);
    if (swapped) {
      swapped = false;
      passCount++;

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          array = swap(i, array);
          swapCount++;
          swapped = true;
          console.log(`Swap ${swapCount}: ${array}`);
        }
      }
    } else {
      break;
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
