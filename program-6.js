// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
const arr3 = []; //for output

const mergeArray = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1);
  }
  if (arr2.indexOf(arr3[i] == -1)) {
    arr3.push(arr2);
  }
  console.log(arr3);
}

mergeArray(arr1, arr2);
