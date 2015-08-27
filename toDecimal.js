function toDecimal(number, base) {
  var decimal = 0;
  var revNumberList = String(number).split('').reverse();
  revNumberList.forEach(function(bit, index) {
    decimal += Number(bit) * Math.pow(base, index);
  });
  return decimal;
};

console.log('expect 0');
console.log('actual', toDecimal(0, 2)); // 0
console.log('expect 1');
console.log('actual', toDecimal(1, 2)); // 1
console.log('expect 3');
console.log('actual', toDecimal(11, 2)); // 3
console.log('expect 8');
console.log('actual', toDecimal(1000, 2)); // 8
console.log('expect 12');
console.log('actual', toDecimal(1100, 2)); // 12
console.log('expect 177');
console.log('actual', toDecimal(2301, 4));
