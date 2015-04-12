/*
  Given an integer n, return the number of trailing zeroes in n!.
  给定一个整数n，返回n!（n的阶乘）数字中的后缀0的个数。
  实际上就是找5的倍数，且若有5*5，则格式会加1，如25*4得到100，有2个0。
  Note: Your solution should be in logarithmic time complexity.
  Tags:Math
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0;
    while(n > 0) {
        n = Math.floor(n/5);
        res += n;
    }
    return res;
};