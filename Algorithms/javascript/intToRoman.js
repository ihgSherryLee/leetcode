/*
  Given an integer, convert it to a roman numeral.

  Input is guaranteed to be within the range from 1 to 3999.

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var strs = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    var s = "";
    var len = values.length;
    for(var i = 0; i < len; i++) {
        while(num >= values[i]) {
            num -= values[i];
            s += strs[i];
        }
    }
    return s;
};