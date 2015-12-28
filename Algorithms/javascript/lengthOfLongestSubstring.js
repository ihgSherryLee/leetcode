/*
Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length,
      res = [],
      max_len = 0;
  if(len == 0) return 0;
  res.push(s[0]);
  var res_len = res.length;
  for(var i = 1; i < len; i++) {
    for(var j = 0; j < res.length; j++) {
      if(res[j] == s[i]) {
          max_len = max_len < res_len ? res_len : max_len;
          res.splice(0,j+1);
          res_len = res.length;
          break;
      }
    }
    res.push(s[i]);
    res_len++;
  }
  max_len = max_len < res_len ? res_len : max_len;
  return max_len;
};
