nums = [2, 7, 11, 15];

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    } else {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

console.log(twoSum(nums, 13));
