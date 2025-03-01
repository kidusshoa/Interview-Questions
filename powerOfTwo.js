var isPowerOfTwo = function (n) {
  let s = n % 2;
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else if (s === 0) {
    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n = n / 2;
    }
    return true;
  } else return false;
};

console.log(isPowerOfTwo(3));
