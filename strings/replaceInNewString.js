function replaceInNewString (string, search, replace) {
  if (string.indexOf(search) >= 0) {
    var start = string.indexOf(search)
    var end = start + search.length
    return string.slice(0, start) + replace + string.slice(end, string.length)
  };
};





console.log('expected: ', 'lace');
console.log('actual:   ', replaceInNewString('mace', 'm', 'l'))
console.log("++++++++++++++++++++++++++");
console.log('expected: ', 'replace');
console.log('actual:   ', replaceInNewString('deface', 'def', 'repl'));
