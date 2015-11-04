/*
  You are climbing a stair case. It takes n steps to reach to the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  ags: Dynamic Programming

*/

/**
 * @param {number} n
 * @return {number}
 */

/*
 *设 f (n) 表示爬 n 阶楼梯的不同方法数，为了爬到第 n 阶楼梯，有两个选择：
 *? 从第 n - 1 阶前进 1 步；
 *? 从第 n - 2 阶前进 2 步；
 *因此，有 f (n) = f (n 1) + f (n 2)。
 *斐波那契数列
*/
var climbStairs = function(n) {
  if(n == 0 || n == 1 || n == 2) return n;
  var sum = 2,prev = 1,cur = 0;
  for(var i = 2; i < n; i++) {
      cur = sum;
      sum += prev;
      prev = cur;
  }
  return sum;
};