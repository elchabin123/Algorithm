// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

//Note 1: loop on each character and count it O(n)
class Solution {
  // @param {string} s
  // @param {string} t
  // @return {boolean}

  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const sCount = {};
    const tCount = {};
    for (let i = 0; i < s.length; i++) {
      sCount[s[i]] = (sCount[s[i]] || 0) + 1;
      tCount[t[i]] = (tCount[t[i]] || 0) + 1;
    }
    for (let char in sCount) {
      if (sCount[char] !== tCount[char]) {
        return false;
      }
    }
    return true;
  }
}

const s = "racecar";
const t = "carrace";
const isAnagram = new Solution();
console.log(isAnagram.isAnagram(s, t));

//Note 2: sort the strings and compare them O(nlogn)
class Solution1 {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let sSort = s.split("").sort().join();
    let tSort = t.split("").sort().join();
    return sSort == tSort;
  }
}
const isAnagram1 = new Solution1();
console.log(isAnagram.isAnagram(s, t));

//Note 3: using hash table O(n)
class Solution3 {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
  }
}
