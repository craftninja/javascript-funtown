// Given two strings, write a function that returns the longest common substring.

// lcs('havoc', average) => 'av'
// lcs('baddd', 'dddabc') => 'ddd'
// lcs('food', 'lame') => ''
// lcs('abcddd', 'dddabc') => 'abc'

function lcs(stringA, stringB) {
  var startA, startB, common;
  var answers = [];
  for (var i = 0; i < stringA.length; i++) {
    common = '';
    startA = i;
    startB = stringB.indexOf(stringA[i]);
    if (startB >=0) {
      var it = 0;
      while (stringA[startA+it] == stringB[startB+it]) {
        common += stringA[startA+it];
        it ++;
      };
      answers.push(common);
    };
  };
  var answer = '';
  if (answers.length > 0) {
    answer = answers.reduce(function(prevVal, currVal) {
      return prevVal.length >= currVal.length ? prevVal : currVal;
    });
  };
  return answer;
};

console.log(lcs('havoc', 'average'));
console.log(lcs('baddd', 'dddabc'));
console.log(lcs('food', 'lame'));
console.log(lcs('abcddd', 'dddabc'));
