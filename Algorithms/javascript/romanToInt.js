/*
  Given a roman numeral, convert it to an integer.

  Input is guaranteed to be within the range from 1 to 3999.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var transform = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    var len = s.length,res = 0;
    if(len == 1) return transform[s];
    for(var i = 0; i <len-1; i++) {
        if(transform[s[i]] >= transform[s[i+1]]) res += transform[s[i]];
        else res -= transform[s[i]];
    }
    res += transform[s[i]];
    return res
};