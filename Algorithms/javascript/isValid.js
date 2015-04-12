/*
  Given a string containing just the characters '(', ')', 
  '{', '}', '[' and ']', determine if the input string is valid.
  The brackets must close in the correct order, "()" and "()[]{}" 
  are all valid but "(]" and "([)]" are not.
  Tags:Stack,String
*/

/**
 * @param {string} s
 * @returns {boolean}
 */
 // 利用数组的pop()和push()模拟栈操作
var isValid = function(s) {
    var s1 = new Array();
    var i,s1len,
        slen = s.length;
        for(i = 0; i < slen; i++) {
            s1len = s1.length;
            switch(s[i]) {
                case"(": s1.push(s[i]);
                         break;
                case"{": s1.push(s[i]);
                         break;
                case"[": s1.push(s[i]);
                         break;
                case")": if(s1[s1len-1] !== "(") {return false;}
                         else {s1.pop();}
                         break;
                case"}": if(s1[s1len-1] !== "{") {return false;}
                         else {s1.pop();}
                         break;
                case"]": if(s1[s1len-1] !== "[") {return false;}
                         else {s1.pop();}
                         break;
            }
        }
        if(s1.length !== 0) {return false;}
        else {return true;}
};