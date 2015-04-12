/*
  Reverse bits of a given 32 bits unsigned integer.
  For example, given input 43261596 (represented in binary 
  as 00000010100101000001111010011100), return 964176192 
  (represented in binary as 00111001011110000010100101000000).
  Follow up:
  If this function is called many times, how would you optimize it?
  Tags:Math
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var i = 0;
        res = 0;
    /*原来自己的方法
    while(i < 32) {
        res = res * 2 + (n & 1);
        n = n >>> 1;
        i++;
    }
    */
    while(i < 32) {
        //左移相当于*2
        res = (res << 1) ^ (n & 1);
        n = n >>> 1;
        i++;
    }
    //左移有符号，可以将数右移位数为0转换成无符号
    res = res >>> 0;
    return res;
};