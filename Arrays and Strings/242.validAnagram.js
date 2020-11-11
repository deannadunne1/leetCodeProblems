/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

//Solution One
//Time complexity O[n]
//Space complexity O[1]
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let left = 0;
  let right = t.length - 1;

  while (right > -1) {
    if (s[left] !== t[right]) return false;
    left++;
    right--;
  }
  return true;
}

//Solution 2: not optimal
var isAnagram = function (s, t) {
  let newS = Array.from(s).sort().join("");
  let newT = Array.from(t).sort().join("");
  console.log(newS, newT);
  return newS == newT;
};
