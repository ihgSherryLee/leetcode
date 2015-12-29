/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var res = "",
      len = s.length,
      dist = (numRows-1) * 2,
      i = 0,
      j = 0,
      k = 0;
  if(numRows == 1 || len < numRows) return s;
  while(i < numRows) {
    j = i;
    if(i == numRows-1 || i == 0) {
      while(j < len) {
        res += s[j];
        j += dist;
      }
    }
    else {
      k = i * 2;
      while(j < len) {
        res += s[j];
        k = dist - k;
        j += k;
      }
    }
    i++;
  }
  return res;
};
