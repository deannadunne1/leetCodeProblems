/*
Difficulty: EASY
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Ex:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Ex2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

constraints: 1 <= n <= 45
*/

//Solution:

//pattern follows fibonacci sequence
const climbStairs = function(n) {
  let old = 0
  let current = 1
  let next = 1
  while(n > 0){
      old = current
      current = next
      next = old + current
      n--
  }
  return current
};

climbStairs(1) // expected 1
climbStairs(12) // expected 233
climbStairs(45) // expected 1836311903
