var searchInsert = function (nums, target) {
  let c = nums.length - 1;
  if (target > nums[c]) {
    return nums.length;
  } else if (target == 0 && nums[0] > 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  for (let k = 0; k < nums.length; k++) {
    for (let j = 1; j < nums.length; j++) {
      if (target > nums[k] && target < nums[j]) {
        return j;
      }
    }
  }
  if ((nums[0] = [1001])) {
    return 0;
  }
};

nums = [1, 3, 5, 6];
let target = 5;
nums2 = [1, 3, 5, 6];
let target2 = 2;
nums3 = [1, 3, 5, 6];
let target3 = 7;

console.log(searchInsert(nums2, target2));
