/*
  Given a positive integer, return its corresponding column title 
  as appear in an Excel sheet.
  For example:
  1 -> A
  2 -> B
  3 -> C
  ...
  26 -> Z
  27 -> AA
  28 -> AB 
*/

/**
 * @param {number} n
 * @returns {string}
 */
var convertToTitle = function(n) {
    var res = "",
        temp = "",
        number;
    while(n) {
        n--;
        // 要先将"A"的ASCII值算出来
        number = "A".charCodeAt();
        // "A"的ASCII值加上余数,再转化成字符
        temp = String.fromCharCode(number + n%26);
        res = temp + res;
        // javascript中n/26不是整数，不用Math.floor,n永远不会为0,死循环
        n = Math.floor(n/26);
    }
    return res;
};