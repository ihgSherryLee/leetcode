/** Given an integer n, return 1 - n in lexicographical order.
 * 
 * For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].
 * 
 * Please optimize your algorithm to use less time and space. The input size 
 * may be as large as 5,000,000.
 * 
 */

 /**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let len = n.toString().length;
  let res = []
  if (n <= 1) {
    for (let i = 1; i <= n; i++) {
      res.push(i)
    }
    return res
  } else {

  }

};

var lexicalOrder = function(n) {
  let res = []
  for(let i = 1; i <= n; i++) {
    res.push(i)
  }
  res = res.sort((a, b) => {
    return (a + '') < (b + '') ? -1 : 1
  })
    return res
};