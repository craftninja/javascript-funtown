function reverseString (string) {
  return string.split('').reverse().join('')
};

var string = "I am Henry the Eighth I am"
console.log(string);
console.log('expected: ', 'ma I hthgiE eht yrneH ma I');
console.log('actual:   ', reverseString(string));
