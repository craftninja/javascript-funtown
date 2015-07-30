// Mentally evaluate the following code example. List out all things that are logged to the console, in the order they are logged.

var bestMessageEver = 'Here is a message that is just the best.';
function worstMessageEver() {
  var bestMessageEver;
  console.log(bestMessageEver);
  var bestMessageEver = 'Here is a message that is just the worst.';
  return ;
}
worstMessageEver();
