// Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.

function palindrome (string) {
  var letters = string.split('');
  while (letters.length > 1) {
    if (letters.pop() !== letters.shift()) {
      return false;
    };
  };
  return true;
};

console.log("expected:", true);
console.log("actual:  ", palindrome("abba"));

console.log("expected:", true);
console.log("actual:  ", palindrome("abcba"));

console.log("expected:", false);
console.log("actual:  ", palindrome("abacca"));
