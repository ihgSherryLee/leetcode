/*
  Write a function that takes an unsigned integer and returns 
  the number of ’1' bits it has (also known as the Hamming weight).

  For example, the 32-bit integer ’11' has binary representation 
  00000000000000000000000000001011, so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0;
    while(n) {
        if((n & 1) == 1) {
            res++;
        }
        // 用>>时，在处理2147483648，即2^31出错，右移后为负数
        n >>>= 1;
    }
    return res;
};