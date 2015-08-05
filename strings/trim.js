function trim(string) {
  var startingIndex, endingIndex;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      startingIndex = i;
      break;
    }
  }

  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      endingIndex = j;
      break;
    }
  }
  return string.slice(startingIndex, endingIndex +1);
}

console.log(trim('    spaaaaace')+'||||||');
console.log(trim('spaaaaace    ')+'||||||');
console.log(trim('    spaaaaace    ')+'||||||');
console.log(trim('    spaaa...   ...aace    ')+'||||||');
