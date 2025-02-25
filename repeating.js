const repeatingLetter = (str) => {
  let maxCount = 0;
  let currentCount = 1;
  let maxChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxChar = str[i];
    }
  }

  return maxChar;
};

console.log(repeatingLetter("ABCCDDDEFFGGGGGGHI"));
