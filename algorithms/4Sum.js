// Source : https://leetcode.com/problems/4sum/
// Author : Charles Chen
// Date   : 2018-03-20

/***************************************************************************************
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note: The solution set must not contain duplicate quadruplets.
 *
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 *
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 * ]
 *
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [];
    var len=nums.length;
    nums.sort(function(a,b) { return a - b });
    for(var i = 0; i < len-3; i++) {
        while(i > 0 && nums[i] == nums[i-1]) {
            i++;
        }
        var left, mid, right;
        for (left = i+1; left < len-2; left++) {
            while(left > i+1 && nums[left] == nums[left-1]) {
                left++;
            }
                mid = left + 1;
                right = len - 1;
                while(mid < right) {
                    if(nums[i] + nums[left] + nums[mid] + nums[right] == target) {
                        result.push([nums[i], nums[left], nums[mid], nums[right]]);
                        mid++;
                        right--;
                        while(mid < right && nums[mid] == nums[mid-1]) {
                            mid++;
                        }
                        while(mid < right && nums[right] == nums[right+1]) {
                            right--;
                        }
                    } else if(nums[mid] + nums[right] < target-nums[i]-nums[left]) {
                        mid++;
                    } else {
                        right--;
                    }
                }
        }
    }
    return result;
};
