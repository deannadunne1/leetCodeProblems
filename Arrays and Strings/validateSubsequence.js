//Prompt:
/* Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].  Note that a single number in an array and the array itself are both valid subsequence of the array.
*/

//Solution:
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      if (j == sequence.length - 1) return true;
      j++;
    }
  }
  return false;
}

/*
Test Case 1:
{
 "array": [5, 1, 22, 25, 6, -1, 8, 10]
 "sequence": [1, 6, -1, 10]
}
Result: Pass
------------------------------------
Test Case 2:
{
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10, 11, 11, 11, 11]
}
Result: Pass
*/
