var isPalindrome = function (s) {
  if (s === s.split("").reverse().join("")) {
    return true;
  } else return false;
};

let luca = "sanas";
let string2 = "tetatta";
console.log(isPalindrome(luca));
