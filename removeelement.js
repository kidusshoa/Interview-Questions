var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  console.log(nums);
};

nums = [3, 2, 2, 3];
val = 3;
removeElement(nums, val);
