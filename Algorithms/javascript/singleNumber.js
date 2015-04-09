/*
  Given an array of integers, every element appears twice 
  except for one. Find that single one.
  Note:
  Your algorithm should have a linear runtime complexity. 
  Could you implement it without using extra memory?
  Tags:Hash Table,Bit Manipulation
*/

/*
  思路：用按位异或的方法，如11^01是10,10^11是01,相当于将2个相同的数
  消掉，最后剩下的就是只有一个的数。
*/

var singleNumber = function(A) {
    var i,
        res = 0,
        len = A.length;
    for(i = 0; i < len; i++) {
        res ^= A[i];
    }
    return res;
};
