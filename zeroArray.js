// If any element in the given two-dimensional array is zero, make the entire row and column zero.

nums = [
  [2, 3, 4, 7],
  [5, 6, 4, 0],
];

var zero = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      if (nums[i][j] === 0) {
        for (let k = 0; k < nums.length; k++) {
          for (let f = 0; f < nums[0].length; f++) {
            nums[k][f] = 0;
          }
        }
      }
    }
  }
  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length[0]; b++) {
      console.log(nums[a][b]);
    }
  }
};

zero(nums);
