// Source : https://leetcode.com/problems/3sum
// Author : Charles Chen
// Date   : 2018-03-20

/***************************************************************************************
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c
 * = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 *
 ***************************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var left, mid, right;
    var result = [];
    var len=nums.length;
    nums.sort(function(a,b){return a>b ? 1 : -1;});
    
    if(len<3){return result;}
    for (left=0; left<len-2; left++) {
        if(left==0 || nums[left]>nums[left-1]) {
            target = 0-nums[left];
            mid=left+1;
            right=len-1;
            while(mid<right) {
                if(nums[mid]+nums[right]==target) {
                    result.push([nums[left],nums[mid],nums[right]]);
                    mid++;
                    right--;
                    while(mid<right && nums[mid]==nums[mid-1]){mid++;}
                    while(mid<right && nums[right]==nums[right+1]){right--;}
                } else if(nums[mid]+nums[right]<target) {
                    mid++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};
