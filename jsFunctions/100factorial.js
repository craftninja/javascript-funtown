// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
      factorial *= i;
    };
    return factorial;
  };
};

console.log("expected:", 120);
console.log("actual:  ", factorial(5));

console.log("expected:", 1);
console.log("actual:  ", factorial(0));
