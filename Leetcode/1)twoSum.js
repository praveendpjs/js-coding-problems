/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Given an array of integers `nums` and an integer `target`, return indices
 * of the two numbers such that they add up to `target`.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 *
 * You can return the answer in any order.
 * 
 * Example 1:

 *Input: nums = [2,7,11,15], target = 9
 *Output: [0,1]
 *Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *Example 2:
 *
 *Input: nums = [3,2,4], target = 6
 *Output: [1,2]
 *Example 3:
 *
 *Input: nums = [3,3], target = 6
 *Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = {};  // value → index

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        const needed = target - val;

        if (seen[needed] !== undefined) {
            return [seen[needed], i];
        }

        seen[val] = i;
        // console.log(seen);
        
    }
}

// Using hash map data structure
// This is same solution as above but with using map instead of regular objects.
// function twoSum(nums, target) {
//     const map = new Map(); // value -> index

//     for (let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i];

//         if (map.has(diff)) {
//             return [map.get(diff), i];
//         }

//         map.set(nums[i], i);
//     }
// }



// Brute force
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

console.log(twoSum([1,2,5,6,7,0], 9));
