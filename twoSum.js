// Determine if there are any two integers in the array whose sum equals the provided value, given an array of integers and a value.

nums = [2, 3, 4, 7, 9];
nums2 = [];

var sum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(sum(nums, 10));
