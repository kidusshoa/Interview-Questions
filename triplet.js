// Write a function returning true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2 given an array of numbers.

nums = [3, 4, 5];
nums2 = [5, 10, 45];

var triplet = function (nums) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let f = 0; f < 3; f++) {
        let num1 = nums[i] * nums[i];
        let num2 = nums[j] * nums[j];
        sum = num1 + num2;

        if (sum === Math.pow(nums[f], 2)) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(triplet(nums));
