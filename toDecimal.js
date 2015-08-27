function toDecimal(binary) {
  var decimal = 0;
  var revBinaryList = String(binary).split('').reverse();
  revBinaryList.forEach(function(bit, index) {
    decimal += Number(bit) * Math.pow(2, index);
  });
  return decimal;
};

console.log('expect 0');
console.log('actual', toDecimal(0)); // 0
console.log('expect 1');
console.log('actual', toDecimal(1)); // 1
console.log('expect 3');
console.log('actual', toDecimal(11)); // 3
console.log('expect 8');
console.log('actual', toDecimal(1000)); // 8
console.log('expect 12');
console.log('actual', toDecimal(1100)); // 12
