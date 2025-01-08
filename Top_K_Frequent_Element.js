// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.
//Note 1: bucket sort O(n)
class Solution {
  // /**
  //  * @param {number[]} nums
  //  * @param {number} k
  //  * @return {number[]}
  //  */
  topKFrequent(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
      freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
      for (const n of freq[i]) {
        res.push(n);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}

//Note 2: hashmap K.O(nlogn)

class Solution1 {
  // /**
  //  * @param {number[]} nums
  //  * @param {number} k
  //  * @return {number[]}
  //  */
  topKFrequent(nums, k) {
    const count = {};
    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }

    const arr = Object.entries(count).map(([num, freq]) => [
      freq,
      parseInt(num),
    ]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map((pair) => pair[1]);
  }
}
