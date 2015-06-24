// Iteration 1:
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3) print "Buzz" instead.

// Iteration 2:
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 5 and 3.

// Iteration 1:

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  };
};

// Iteration 2

for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  };
};
