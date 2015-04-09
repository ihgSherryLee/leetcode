/*
  Given a column title as appear in an Excel sheet, 
  return its corresponding column number.
  For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
*/

var titleToNumber = function(s) {
    var temp,i,pow,
        res = 0,
        number = "A".charCodeAt();
        len = s.length;
    for(i = len-1; i >= 0; i--) {
        temp = s[i].charCodeAt();
        pow = Math.pow(26,len-1-i);
        res += ((temp - number + 1) * pow );
    }
    return res;
};