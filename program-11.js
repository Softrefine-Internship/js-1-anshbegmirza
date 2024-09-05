// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const unionFunction = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    return arr1.push(arr2[i]);
  }
}
console.log(unionFunction(arr1, arr2));
