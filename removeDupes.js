function removeDupes(chars) {
  var charList = chars.split('');
  var dupesRemovedList = [];
  charList.forEach(function(char) {
    dupesRemovedList.indexOf(char) >= 0 ? null : dupesRemovedList.push(char);
  });
  return dupesRemovedList.join('');
};

console.log('expect AB');
console.log('actual', removeDupes('AABB')); // 'AB'
console.log('expect AaBb');
console.log('actual', removeDupes('AaAaBbBb')); // 'AaBb'
console.log('expect cAtCaT');
console.log('actual', removeDupes('cAtCaT')); // 'cAtCaT'
