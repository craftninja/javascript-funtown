// from http://adriann.github.io/programming_problems.html
// Write a function, alternatingElements, that combines two lists by alternatingly taking elements:
// console.log(alternatingElements(['a','b','c'], [1,2,3]));
// ['a',1,'b',2,'c',3]


function alternatingElements (array1, array2) {
  var length = array1.length
  var newArray = [];
  for (var i=0; i < length; i ++) {
    newArray.push(array1[i])
    newArray.push(array2[i])
  }
  return newArray
}


console.log("Expected:");
console.log("[ 'a', 1, 'b', 2, 'c', 3 ]");
console.log("Actual:");
console.log(alternatingElements(['a','b','c'], [1,2,3]));
