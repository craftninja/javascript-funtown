function DiceRoller(sides) {
  this.sides = sides || 6;
  this.hand = [];
  this.roll = function(numDice) {
    this.hand = [];
    for (var i = 0; i < numDice; i++) {
      this.hand.push(Math.floor( Math.random() * this.sides ) + 1);
    };
  };
};

var game = new DiceRoller();
console.log("expected: []");
console.log(game.hand);
game.roll(4);
game.roll(4);
console.log("expected: array with four random numbers between 1 and 6");
console.log(game.hand);
