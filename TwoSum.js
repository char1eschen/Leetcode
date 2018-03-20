// Source : https://oj.leetcode.com/problems/two-sum/
// Author : Charles Chen
// Date   : 2018-03-20

/**********************************************************************************
 *
 * Given an array of integers, find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2. Please note that your returned answers (both index1 and index2)
 * are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var i, j;
var twoSum = function (nums, target) {
    for(i = 0; i < nums.length - 1; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

