nums = [2, 7, 11, 15];

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
};

console.log(twoSum(nums, 9));
