/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
*/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var reg = /[a-z,A-Z]+/;
  var res = str.split(reg);
  if(isNaN(parseInt(res[0]))) return 0;
  else if(parseInt(res[0]) > 2147483647) return 2147483647;
  else if(parseInt(res[0]) < -2147483648) return -2147483648;
  else return parseInt(res[0]);
};
