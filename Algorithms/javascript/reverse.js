/*
  Reverse digits of an integer.
  Example1: x = 123, return 321
  Example2: x = -123, return -321
  Have you thought about this?
  Here are some good questions to ask before coding. 
  Bonus points for you if you have already thought through this!
  If the integer's last digit is 0, what should the output be? 
  ie, cases such as 10, 100.
  Did you notice that the reversed integer might overflow? 
  Assume the input is a 32-bit integer, then the reverse of 1000000003 
  overflows. How should you handle such cases?
  For the purpose of this problem, assume that your function returns 0 
  when the reversed integer overflows.
  Tags:Math
*/

/**
 * @param {number} x
 * @returns {number}
 */
var reverse = function(x) {
    var res = 0;
    while(x != 0) {
        res = res * 10 + x % 10;
        //根据x的正负选择向下或向上取整
        if(x > 0) {x = Math.floor(x/10);}
        else {x = Math.ceil(x/10);}
    }
    //判断res是否溢出,JavaScript的安全整数是54位的,最大可表示整数64位,
    //所以不能用Number.XXX_SAFE_INTEGER和Number.XXX_VALUE
    if(res > Math.pow(2,31)-1 || res < -(Math.pow(2,31)-1)) {
        return 0;
    }
    return res;
};