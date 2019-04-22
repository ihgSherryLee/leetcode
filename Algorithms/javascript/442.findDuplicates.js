/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 * Find all the elements that appear twice in this array.

 * Could you do it without extra space and in O(n) runtime?

 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]

 * Output:
 * [2,3]

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }
    
    let dup = [];
    for (let i = 0, n = nums.length; i < n; i++) {
        let next = Math.abs(nums[i]);
        nums[next - 1] < 0 ? dup.push(next) : nums[next - 1] = -nums[next - 1];
    }
    
    return dup;
};