function House (windows, color) {
  this.color = color || "yellow";
  this.windows = windows;
  this.paintHouse = function (newColor) {
    this.color = newColor
  };
};

var vampHouse = new House (false, "green");
vampHouse.paintHouse("blurple");
console.log(vampHouse);

var faeHouse = new House ( true);
faeHouse.paintHouse("gold");
console.log(faeHouse);
