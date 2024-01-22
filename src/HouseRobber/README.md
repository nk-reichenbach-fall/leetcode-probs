# Problem Statement

You are a robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

#### Example 1:

> <b>Input:</b> nums = [4,2,3,1] 
> <b>Output:</b> 7
> <b>Explanation:</b> Rob house 1 (money = 4) and then rob house 3 (money = 3).
> Total amount you can rob = 4 + 3 = 7.

#### Example 2:

> <b>Input:</b> nums = [1,4,5,8,9] 
> <b>Output:</b> 15
> <b>Explanation:</b> Rob house 1 (money = 1), rob house 3 (money = 5) and rob house 5 (money = 9).
> Total amount you can rob = 15.

#### Constraints:

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 500`
