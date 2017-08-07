/**
 * Given an unsorted integer array, find the first missing positive integer.
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 * Your algorithm should run in O(n) time and uses constant space.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i]-1] != nums[i]) {
      let t = nums[i]
      nums[i] = nums[t-1]
      nums[t-1] = t
    }
  }
  console.log(nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1)
      return i + 1
  }
  return len + 1
};