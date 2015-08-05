function reverseString (string) {
  string = string.split('').reverse().join('');
  return string;
};

var string = "I am Henry the Eighth I am"
console.log(string);
console.log('expected: ', 'ma I hthgiE eht yrneH ma I');
console.log('actual:   ', reverseString(string));
