// Define a function called longestWord that takes a string and returns the longest word in the string.
// Refactor the longestWord function so that it ignores punctuation.

function longestWord (string) {
  var words = string.split(' ');
  var longestWord;
  words.forEach(function (word) {
    if (!longestWord) {
      longestWord = word;
    } else if (word.length > longestWord.length) {
      longestWord = word;
    };
  });
  return longestWord;
};

console.log("expected:", "puppies");
console.log("actual:  ", longestWord("I do really love puppies"));

console.log("expected:", "Kittens");
console.log("actual:  ", longestWord("Kittens are great too"));
