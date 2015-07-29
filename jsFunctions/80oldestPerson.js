// Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

function oldestPerson (people) {
  var oldest;
  Object.keys(people).forEach(function(person) {
    if (!oldest){
      oldest = person;
    } else if (people[person] > people[oldest]) {
      oldest = person;
    };
  });
  return oldest;
};

var people = {'Chuck': 22, 'Brian': 46}
console.log("expected:", "Brian");
console.log("actual:  ", oldestPerson(people));

var people = {'Herman': 122, 'Skyye': 19}
console.log("expected:", "Herman");
console.log("actual:  ", oldestPerson(people));
