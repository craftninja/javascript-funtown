// [Challenge] Mentally evaluate the following code example. What is the value logged to the console?

console.log((function (value) {
  return (function (copy) {
    return copy === value; }
  )(value);
})("Hello World"));

// The inner function is called with `value` as the argument for the parameter `copy`. `value` is passed in from the outer function argument with the argument “Hello World”.  Thus copy and value are pointing to the same thing in memory.

// [Challenge] Explain the previous problem (again, do not use an interpreter, just your mind). If the argument "Hello World" is changed to [1,2,3] what changes in the output? How about if the argument is "FooBarSki"?

console.log((function (value) {
  return (function (copy) {
    return copy === value; }
  )(value);
})([1,2,3]));

console.log((function (value) {
  return (function (copy) {
    return copy === value; }
  )(value);
})("FooBarSki"x));
