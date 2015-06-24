// You can get the Nth character, or letter, from a string by writing `"string".charAt(N)`, similar to how you get it's length with `"s".length`. The returned value will be a string containing only one character (for example, 'b'). The first character has position sero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second arguement that indicates the character that is to be counted (rather than countig only uppercase "B" characters). Rewrite countBs to make use of this new function.

function countBs(string) {
  count = 0;
  for (var i = 0; i < string.length; i++) {
    string[i] == "B" ? count ++ : count;
  };
  return count;
};

function countChars(string, char) {
  count = 0;
  for (var i = 0; i < string.length; i++) {
    string[i] == char ? count ++ : count;
  };
  return count;
};

console.log(countBs("Bees Behave Like Bees"));
console.log(countChars("Bees Behave Like Bees", "e"));
