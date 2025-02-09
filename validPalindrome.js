var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  if (s === s.split("").reverse().join("")) {
    return true;
  } else return false;
};

let luca = "sanas";
let string2 = "tetatta";
let string3 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(string3));
