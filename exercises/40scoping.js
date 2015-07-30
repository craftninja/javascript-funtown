// Create code examples (different from the ones you have seen so far) to illustrate local, global, and lexical scoping. You may use comments to explain how each example illustrates the concept.

// GLOBAL EXAMPLES:

x = "a global variable";

function oopsGlobal () {
  y = "also totally global";
};

// LOCAL VARIABLES:

function totesLocal (local) {
  return local;
};

// LEXICALLY SCOPED VARIABLES

function lexical () {
  var insideLexical = true;
  function inner () {
    var innerVar = true;
    // access to insideLexical is available
  };
  // no access to innerVar here
};
