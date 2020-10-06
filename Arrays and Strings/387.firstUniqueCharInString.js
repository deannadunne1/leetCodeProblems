/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

/*
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  let arr = s.split("");
  let used = [];
  //tracks letters we've already seen
  for (let i = 0; i < arr.length; i++) {
    if (used.includes(arr[i])) continue; //skips letter if its already been seen
    if (i === arr.length - 1 && !used.includes(arr[i])) return i;
    //handles single letter strings & cases where last letter is the first unique character
    used.push(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) break;
      if (j === arr.length - 1) return i;
    }
  }

  return -1;
  //return -1 if none are unique
};

//Runtime: 104 ms, faster than 86.50% of JavaScript online submissions for First Unique Character in a String.
//Memory Usage: 45.6 MB, less than 10.22% of JavaScript online submissions for First Unique Character in a String.
