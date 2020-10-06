/*
Prompt: You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

Example:
const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);
console.log(message.join(''));
Prints: 'steal pound cake'

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
*/

function reverseWords(array) {
  let arr = array.join("").split(" ");
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let hold = arr[rightPointer];
    arr[rightPointer] = arr[leftPointer];
    arr[leftPointer] = hold;
    leftPointer++;
    rightPointer--;
  }

  return arr.join(" ");
}

let message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

console.log(reverseWords(message));
