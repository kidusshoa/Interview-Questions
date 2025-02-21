nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  nums = nums.sort();
  if (nums.length == 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

result = singleNumber(nums);
console.log(result);
