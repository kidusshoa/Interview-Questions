var permute = function (nums) {
  let resultArr = [];
  if (nums.length == 1) {
    return [[nums[0]]];
  } else if (nums.length == 0) {
    return [];
  } else {
    for (let i = 0; i < nums.length; i++) {
      const currentElement = nums[i];

      const otherElements = nums.slice(0, i).concat(nums.slice(i + 1));
      const swappedPermutation = permute(otherElements);

      for (let j = 0; j < swappedPermutation.length; j++) {
        const finalSwappedPermutation = [currentElement].concat(
          swappedPermutation[j]
        );

        resultArr.push(finalSwappedPermutation);
      }
    }

    return resultArr;
  }
};

nums = [1, 3, 5];
console.log(permute(nums));
