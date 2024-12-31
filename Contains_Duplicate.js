//Note: Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

//Note 1: loop on each number and compare it with the rest of the numbers O(n^2)
const nums = [1, 2, 3, 4];
const ContainsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(ContainsDuplicate(nums));

//Note 2: sort the array and compare the adjacent elements O(logn)

const nums1 = [1, 2, 3, 1];
const ContainsDuplicate1 = function (nums1) {
  nums1.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(ContainsDuplicate(nums1));

//Note 3: using harsh set O(n)
const nums2 = [1, 2, 3, 5, 1];
const ContainsDuplicate2 = function (nums) {
  const harshSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (harshSet.has(nums[i])) {
      return true;
    }
    harshSet.add(nums[i]);
  }
  return false;
};
console.log(ContainsDuplicate2(nums2));
