// Write a function that does the following:

// add("1+2+20"); // => 23
// multiply("1*12*12"); // => 144
// subtract("1-12-12"); // => -23
// divide("100/5"); // => 20
// math("1+10*12/3"); // => 41

function add(operation) {
  var operands = operation.split('+');
  var sum = operands.reduce(function(prevOperand, currOperand) {
    return Number(prevOperand) + Number(currOperand);
  });
  return sum;
};

console.log(add("1+2+20"));

function multiply(operation) {
  var operands = operation.split('*');
  var product = operands.reduce(function(prevOperand, currOperand) {
    return Number(prevOperand) * Number(currOperand);
  });
  return product;
};

console.log(multiply("1*12*12"));

function subtract(operation) {
  var operands = operation.split('-');
  var result = operands.reduce(function(prevOperand, currOperand) {
    return Number(prevOperand) - Number(currOperand);
  });
  return result;
};

console.log(subtract("1-12-12"));

function divide(operation) {
  var operands = operation.split('/');
  var result = operands.reduce(function(prevOperand, currOperand) {
    return Number(prevOperand) / Number(currOperand);
  });
  return result;
};

console.log(divide("100/5"));
