// Mentally evaluate the following code example. List out all things that are logged to the console, in the order they are logged.
//
b = 10;
console.log(b);
b = 11;
console.log(b);

var someValue = (function() {
  b = 12;
  return b;
})();
console.log(someValue);

// The Variable `someValue` is assigned to a self executing function, so calling the variable calls the self executing function, thus:
// 10
// 11
// 12
