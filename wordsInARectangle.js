// http://adriann.github.io/programming_problems.html
// Write a function, wordsInARectangle that takes a list of strings an prints them, one per line, in a rectangular frame.
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function wordsInARectangle (arrayOfWords) {
  var maxWordLength = arrayOfWords.reduce( function(prevWord, currentWord) {
    return prevWord.length > currentWord.length ? prevWord.length : currentWord.length;
  });

  rectangle = [];
  rectangle.push('*'.repeat(maxWordLength+4));
  arrayOfWords.forEach(function(word, index, array){
    rectangle.push('* ' + word + ' '.repeat(maxWordLength - word.length) + ' *');
  });
  rectangle.push('*'.repeat(maxWordLength+4));
  rectangle.forEach(function(word) {
    console.log(word);
  })
}

console.log('Expected: ');
console.log('*********');
console.log('* Hello *');
console.log('* World *');
console.log('* in    *');
console.log('* a     *');
console.log('* frame *');
console.log('*********');
console.log('Actual: ');
console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
