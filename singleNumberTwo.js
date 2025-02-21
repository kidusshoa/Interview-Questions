nums = [0, 1, 0, 1, 0, 1, 99];

var singleNumber = function (nums) {
  nums = nums.sort();
  if (nums.length == 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i = i + 3) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

result = singleNumber(nums);
console.log(result);
