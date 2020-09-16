//Prompt: Write a function that takes an array of characters and reverses the letters in place.

//Solution:
function reverseStringInPlace(arr) {
  let leftLetter = 0;
  let rightLetter = arr.length - 1;

  while (leftLetter < rightLetter) {
    let hold = arr[leftLetter];
    arr[leftLetter] = arr[rightLetter];
    arr[rightLetter] = hold;
    leftLetter++;
    rightLetter--;
  }
  return arr;
}

//Test Case 1:
let arr1 = ["a", "b", "c", "d", "e", "f"];
console.log(reverseStringInPlace(arr1));
//returns: [ 'f', 'e', 'd', 'c', 'b', 'a' ]

//Test Case 2:
let arr2 = ["d", "e", "a", "n", "n", "a"];
console.log(reverseStringInPlace(arr2));
//returns: [ 'a', 'n', 'n', 'a', 'e', 'd' ]

//Time Complexity: O(n)
//Space Complexity: O(1)

//Can also just use arr.reverse()
