/**
 * Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

 * Example 1:

 * Input: ["abcd","dcba","lls","s","sssll"]
 * Output: [[0,1],[1,0],[3,2],[2,4]] 
 * Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
 * Example 2:

 * Input: ["bat","tab","cat"]
 * Output: [[0,1],[1,0]] 
 * Explanation: The palindromes are ["battab","tabbat"]
 */

 /**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let str = '',
      res = [],
      map = new Map()
  words.forEach((word, i) => {
    map.set((word.split('').reverse().join('')), i)
  })
  words.forEach((word, index) => {
    if (map.has('') && map.get('') !== index && isPalindrome(word)) {
      res.push([map.get(''), index])
    }
    for (let i = 0, len = word.length; i < len; i++) {
      let pre = word.slice(0, i),
          after = word.slice(i)
      if (map.has(pre) && map.get(pre) !== index && isPalindrome(after)) {
        res.push([index, map.get(pre)])
      }
      if (map.has(after) && map.get(after) !== index && isPalindrome(pre)) {
        res.push([map.get(after), index])
      }
    }
  })
  function isPalindrome (word) {
    let len = word.length,
        mid = len >> 1
    for (let i = 0; i < mid; i++) {
      if (word[i] !== word[len-i-1]) {
        return false
      }
    }
    return true
  }
  return res
};

