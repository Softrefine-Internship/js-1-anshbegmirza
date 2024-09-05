// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

const arr1 = [-9, -5, 1];
const arr2 = [4, -2];
arr1.sort();
arr2.sort();
const arr3 = [];
const mergeArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i])
  }

  arr3.sort(); // call a sorting function here (bubble)
  console.log(arr3);
}
mergeArrays(arr1, arr2);