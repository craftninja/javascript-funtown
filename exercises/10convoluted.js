// Experiment with the following function. Once you understand how it should behave refactor the convoluted function to use an inner function to remove duplication:
//
// function convoluted(string) { var output = '';
//
// for(var i = 0; i < string.length; i++) { output += ('a' + string.charAt(i)); }
//
// for(var i = 0; i < string.length; i++) { output += ('b' + string.charAt(i)); }
//
// return output; }

function convoluted(string) {
  var output = '';

  function convoluteWith(chars, string) {
    for(var i = 0; i < string.length; i++) {
      output += (chars + string.charAt(i));
    };
  };

  convoluteWith('a', string);
  convoluteWith('b', string);

  return output;
}

console.log(convoluted("string"));
