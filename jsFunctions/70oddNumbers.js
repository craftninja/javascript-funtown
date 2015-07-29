// Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers (int) {
  var odds = [];
  if (int === 40) {
    return "Haha! You didn't tell me what to do for int == 40!";
  } else if (int > 40) {
    for (var i = 41; i < int; i+=2) {
      odds.push(i);
    };
  } else {
    for (var i = 1; i <= int; i+=2) {
      odds.push(i);
    };
  };
  return odds.join('\n');
};

console.log("expected: list of odd numbers from 41 to 99 in rows");
console.log("actual:");
console.log(oddNumbers(100));

console.log("expected: list of odd numbers from 1 to 39 in rows");
console.log("actual:");
console.log(oddNumbers(39));

console.log(oddNumbers(40));
