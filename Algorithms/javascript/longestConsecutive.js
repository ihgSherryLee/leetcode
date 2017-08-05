/**
*Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
*
*For example,
*Given [100, 4, 200, 1, 3, 2],
*The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
*
*Your algorithm should run in O(n) complexity.
*
*Subscribe to see which companies asked this question
*
*Tags: Array
*Similar Problems: (M) Binary Tree Longest Consecutive Sequence
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var len = nums.length;
    var longestlen = 1,temp = 1;
    if(len == 0) {
    	return 0;
    }
    nums.sort(function(x,y) {
    	if(x > y) {
    		return 1;
    	} else {
    		return -1;
    	};
    })
    for(var i = 0; i < len; i++) {
    	if((nums[i+1] != undefined) && (nums[i+1] == nums[i]+1)) {
    		temp++;
    	} else if((nums[i+1] != undefined) && (nums[i+1] == nums[i])) {
    		continue;
    	} else {
    		longestlen = longestlen > temp ? longestlen : temp;
    		temp = 1;
    	}
     }
    return longestlen;
};