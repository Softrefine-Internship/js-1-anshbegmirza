// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

'use strict';
const arr1 = [-9, -5, 1];
const arr2 = [4, -2];
const ip2 = [3, 5, 1];
const ip3 = [4, 2];


//Sorting function
const bubbleSort = function (arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};


//Merge two arrays
const mergeArrays = function (arr1, arr2) {
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < length - 1; i++) {
    if (arr1.length > arr2.length) {
      arr1.push(arr2[i]);
    }
    else {
      arr2.push(arr1[i]);
    }
  }
  bubbleSort(arr1)
  console.log(arr1);
  // console.log(arr2);

}

console.log(`First Input`);
mergeArrays(arr1, arr2);
console.log(`Second INPUT`);
mergeArrays(ip2, ip3);