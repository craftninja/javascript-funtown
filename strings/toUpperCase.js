function toUpperCase(string) {
  var lowerA = 97, lowerZ = 122, upperA = 65;
  var lowerToUpper = upperA - lowerA
  var upCased = '';
  string.split('').forEach(function(letter) {
    if (letter.charCodeAt(0) >= lowerA && letter.charCodeAt(0) <= lowerZ) {
      upCased += String.fromCharCode(letter.charCodeAt(0) + lowerToUpper);
    } else {
      upCased += letter;
    };
  });
  return upCased;
};

var lower = 'lower';
console.log('expected: ', 'LOWER');
console.log('actual:   ', toUpperCase(lower));

var upper = 'UPPER';
console.log('expected: ', 'UPPER');
console.log('actual:   ', toUpperCase(upper));
