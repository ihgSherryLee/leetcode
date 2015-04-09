/*
  Given an array of size n, find the majority element. 
  The majority element is the element that appears more than n/2 times.
  You may assume that the array is non-empty 
  and the majority element always exist in the array.
  Tags:Divide and Conquer,Array,Bit Manipulation
*/

/**
 * @param {number[]} num
 * @return {number}
 */
var majorityElement = function(num) {
    var res,i,
        cnt = 0,
        len = num.length;
    for(i = 0; i < len; i++) {
    	//因为出现最多的数多于len/2次,若记录被抵消,就重新记录一个
    	//新的值,再次统计
        if(cnt === 0) {
            res = num[i];
        }
        if(res === num[i]) { //记录出现多次，个数+1
            cnt++;
        } else { //记录被抵消,个数--
            cnt--;
        }
    }
    return res;
};