var isPowerOfTwo = function (n) {
  let s = n % 2;
  if (n === 1) {
    return true;
  } else if (s === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isPowerOfTwo(3));
