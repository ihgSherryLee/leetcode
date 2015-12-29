/*
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var len = s.length,
      maxlen = 1,
      start = 0,
      left,right;
  for(var i = 0; i <len; i++) {
    left = i;
    right = i;
    while(left >= 0 && right < len && s[left] == s[right]) {
      left--;
      right++;
    }
    if(maxlen < (right-left-1)) {
      start = left+1;
      maxlen = right-left-1;
    }
    left = i;
    right = i+1;
    while(left >= 0 && right < len && s[left] == s[right]) {
      left--;
      right++;
    }
    if(maxlen < (right-left-1)) {
      start = left+1;
      maxlen = right-left-1;
    }
  }
  console.log(start)
  return s.substr(start,maxlen);
};
