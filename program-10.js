// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]


const sumArray = function (arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    while (arr1[i] != 0 || arr2[i] != 0) {
      arr3.push(arr1[i] + arr2[i]);
    }
  }
  console.log(arr3);

}
sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);


// if (arr1[i] != 0 || arr2[i] != 0) {
//   arr3.push(arr1[i] + arr2[i]);
// }
// else {
//   arr3.push(arr2[i]);
// }