// Write a JavaScript program to clone an array.

const arr1 = [];
const arr2 = [];

const cloneArray = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  console.log(arr2);
}

cloneArray([2, 9, 7, 3, 4, 6, 7], []);


