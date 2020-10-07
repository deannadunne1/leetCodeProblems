//Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  if (s.length < 2) return s.length;
  let count = 0;
  let subString = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (subString.includes(s[j])) break;
      subString += s[j];
    }
    if (subString.length > count) count = subString.length;
    subString = "";
  }
  return count;
}
