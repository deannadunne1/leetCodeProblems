/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:
  const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

function mergeArrays(arr1, arr2) {
  let mergedArr = [];
  let num1 = 0;
  let num2 = 0;
  while (num1 + num2 < arr1.length + arr2.length) {
    if (arr1[num1] <= arr2[num2] || !arr2[num2]) {
      mergedArr.push(arr1[num1]);
      num1++;
    } else {
      mergedArr.push(arr2[num2]);
      num2++;
    }
  }

  return mergedArr;
}

//Time: O(n)
//Space: O(n)
