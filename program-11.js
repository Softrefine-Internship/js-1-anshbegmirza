// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];


const unionOfArrays = function (array1, array2) {
  const length = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < length; i++) {
    if (!array1.includes(array2[i])) {
      array1.push(array2[i]);
    }
  }
  return array1;
};

console.log(unionOfArrays(arr1, arr2));
