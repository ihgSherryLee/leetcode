/*
  Given an array of integers, every element appears three times 
  except for one. Find that single one.

Note:
  Your algorithm should have a linear runtime complexity. 
  Could you implement it without using extra memory?
 Tags:Bit Manipulation
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var i,ones,twos,common,
        len = A.length;
    for(i = 0; i < len; i++) {
    	// 将出现2次的数存进twos
        twos |= (ones & A[i]);
        // 将出现1次的数存进ones
        ones ^= A[i];
        // 若数出现3次，则将ones和twos中的数移走
        common = ~(ones & twos);
        ones &= common;
        twos &= common;
    }
    return ones;
};