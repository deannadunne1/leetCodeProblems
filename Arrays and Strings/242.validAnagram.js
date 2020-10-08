/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function (s, t) {
  let newS = Array.from(s).sort().join("");
  let newT = Array.from(t).sort().join("");
  console.log(newS, newT);
  return newS == newT;
};
