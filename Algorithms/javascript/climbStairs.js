/*
  You are climbing a stair case. It takes n steps to reach to the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  ags: Dynamic Programming

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  //斐波那契数列
  if(n == 0 || n == 1 || n == 2) return n;
  var sum = 2,prev = 1,cur = 0;
  for(var i = 2; i < n; i++) {
      cur = sum;
      sum += prev;
      prev = cur;
  }
  return sum;
};