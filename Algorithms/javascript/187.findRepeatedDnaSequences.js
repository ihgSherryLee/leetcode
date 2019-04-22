/**
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
 *  for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to 
 * identify repeated sequences within the DNA.
 * 
 * Write a function to find all the 10-letter-long sequences (substrings) that 
 * occur more than once in a DNA molecule.
 * 
 * Example:
 * 
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

 /**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const len = s.length;
  let obj = {};
  let res = [];
  for (let i = 0; i < len - 9; i++) {
    const str = s.substring(i, i + 10);
    if(obj[str] === 1) {
      res.push(str)
    } else if(obj[str] > 0) {
      obj[str]++
    } else {
      obj[str] = 1
    }
  }
  return res
};