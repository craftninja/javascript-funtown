// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual (arg1, arg2) {
  return arg1 === arg2;
};

console.log("expected:", true);
console.log("actual:  ", isEqual("awesome", "awe" + "some"));

console.log("expected:", false);
console.log("actual:  ", isEqual("awesome", "awe" + "ful"));
