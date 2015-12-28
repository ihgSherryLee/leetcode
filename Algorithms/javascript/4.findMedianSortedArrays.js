/*
There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var len1 = nums1.length,
        len2 = nums2.length,
        idx,tag,res,temp,
        i = 0;
  if((len1 + len2) % 2 == 1) {
    idx = Math.floor((len1 + len2) / 2);
    tag = 1;
  } else {
    idx = (len1 + len2) / 2 - 1;
    tag = 0;
  }
  if(!len1 || !len2) {
    if(tag) return nums1[idx] ? nums1[idx] : nums2[idx];
    else {
      res = nums1[idx] ? nums1[idx] : nums2[idx];
      temp = nums1[idx+1] ? nums1[idx+1] : nums2[idx+1];
      return (res + temp) / 2;
    }
  }
  while(nums1 || nums2) {
    if(nums1[0] <= nums2[0]) {
      res = nums1.shift();
      len1--;
    } else {
      res = nums2.shift();
      len2--;
    }
    if(i == idx) {
      if(tag) return res;
      else {
        if(!len1 || !len2) {
          temp = nums1[0] ? nums1[0] : nums2[0];
        } else if(nums1[0] <= nums2[0]) {
          temp = nums1.shift();
        } else {
          temp = nums2.shift();
        }
        res += temp;
        return res / 2;
      }
    }
    i++;
    if(!len1) {
      if(tag) return nums2[idx-i];
      else return (nums2[idx-i] + nums2[idx-i+1]) / 2;
    }
    if(!len2) {
      if(tag) return nums1[idx-i];
      else return (nums1[idx-i] + nums1[idx-i+1]) / 2;
    }
  }
};
