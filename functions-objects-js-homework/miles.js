// ## Miles
//
// 1. Write a function that takes in a `car` object and a `route` object.
// 2. Determine if the car has enough gas to make the entire route (return true or false).
//
// #### Example Objects
//
// ```
var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};
// ```

function enoughGas (car, route) {
  return car.milesPerGallon * car.gallonsInTank >= route.miles;
};

console.log(enoughGas(car, route));
