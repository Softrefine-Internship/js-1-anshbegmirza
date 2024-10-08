// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const bubbleSort = function (arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  }
  while (isSwapped)
  return arr;
}


const unionFunction = function (arr1, arr2) {
  bubbleSort(arr1);
  bubbleSort(arr2);
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let isInArray3 = false;

    for (let j = 0; j < arr3.length; j++) {
      if (arr2[i] === arr3[j]) {
        isInArray3 = true;
        break;
      }
    }
    if (!isInArray3) {
      arr3.push(arr2[i]);
    }
  }
  return arr3;
}

console.log(unionFunction(arr1, arr2));
