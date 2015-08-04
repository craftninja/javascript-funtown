function slice(array, firstIndex, lastIndex) {
  lastIndex = lastIndex || array.length
  newArray = []

  if (firstIndex < 0) {
    firstIndex = array.length + firstIndex
  }

  if (lastIndex < 0) {
    lastIndex = array.length + lastIndex
  }

  array.forEach(function(element, index) {
    if (index >= firstIndex && index < lastIndex) {
      newArray.push(element)
    }
  });
  return newArray
};

var a = [1,2,3,4,5]
console.log(slice(a, 0, 5))
console.log(slice(a, 1))
console.log(slice(a, 1, 3))
console.log(a);
console.log(slice(a, -1))
console.log(slice(a, -3, -1))
