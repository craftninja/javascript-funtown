// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

function stringCapitalize (string) {
  var words = string.split(" ");
  var capWords = [];
  var capWord;
  words.forEach(function(word) {
    capWord = word[0].toUpperCase() + word.slice(1);
    capWords.push(capWord);
  });
  return capWords.join(" ");
};

console.log("expected: I Am Henry The Eighth I Am");
console.log("actual:  ", stringCapitalize("i am henry the eighth i am"));
