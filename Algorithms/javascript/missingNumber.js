/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(x,y) {
        return x-y;
    });
    var len = nums.length;
    if(len == 1) return nums[0]==0 ? 1 : 0;
    for(var i = 0; i < len-1; i++) {
        if(i == 0 && nums[i] != 0) return 0;
        if(nums[i]+1 != nums[i+1]) return nums[i]+1;
    }
    return nums[i]+1;
};