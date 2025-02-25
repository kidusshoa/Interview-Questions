const nonRepeatingLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      return str.charAt(i);
    }
  }
};

console.log(nonRepeatingLetter("ABCDDDEFGHI"));
