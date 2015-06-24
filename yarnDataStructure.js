// You have been given a CSV that has been parsed into an array of arrys.
// The content of this nested array structure is yarn.
// Your job is to create a more organized data structure that groups the yarns by brand and line as shown below.
var answer = {
  Madelinetosh: {
    'Tosh DK': {
      weight: 'dk',
      price: 22,
      yardage: 225,
      grams: 100,
      colorways: [ 'Cosmic Wonder Dust', 'Stargazer', 'Edison Bulb', 'Torchere' ]
    },
   'Tosh Merino Light': {
      weight: 'fingering',
      price: 22.5,
      yardage: 420,
      grams: 100,
      colorways: ['Cousteau', 'Grenadine', 'Cosmic Wonder Dust']
    }
  },
  'Cascade Yarns': {
    'Cascade 220': {
      weight: 'worsted',
      price: 9.25,
      yardage: 220,
      grams: 100,
      colorways: ['Charcoal Twist 9540', 'Magenta 7803', 'Neon Yellow 7828']
    },
    'Eco Duo': {
      weight: 'aran',
      price: 19,
      yardage: 197,
      grams: 100,
      colorways: ['Zebra']
    }
  },
  'Jamieson and Smith': {
    '2 ply Jumper Weight': {
      weight: 'fingering',
      price: 6,
      yardage: 125,
      grams: 25,
      colorways: ['Hazel Heather FC55']
    }
  }
};


var yarn = [
  ["Brand", "Line", "Colorway", "Weight", "Price", "Yardage", "Grams"],
  ["Madelinetosh", "Tosh DK", "Cosmic Wonder Dust", "dk", 22, 225, 100],
  ["Madelinetosh", "Tosh Merino Light", "Cousteau", "fingering", 22.5, 420, 100],
  ["Cascade Yarns", "Cascade 220", "Charcoal Twist 9540", "worsted", 9.25, 220, 100],
  ["Jamieson and Smith", "2 ply Jumper Weight", "Hazel Heather FC55", "fingering", 6, 125, 25],
  ["Cascade Yarns", "Cascade 220", "Magenta 7803", "worsted", 9.25, 220, 100],
  ["Cascade Yarns", "Eco Duo", "Zebra", "aran", 19, 197, 100],
  ["Madelinetosh", "Tosh Merino Light", "Grenadine", "fingering", 22.5, 420, 100],
  ["Madelinetosh", "Tosh DK", "Stargazer", "dk", 22, 225, 100],
  ["Cascade Yarns", "Cascade 220", "Neon Yellow 7828", "worsted", 9.25, 220, 100],
  ["Madelinetosh", "Tosh DK", "Edison Bulb", "dk", 22, 225, 100],
  ["Madelinetosh", "Tosh DK", "Torchere", "dk", 22, 225, 100],
  ["Madelinetosh", "Tosh Merino Light", "Cosmic Wonder Dust", "fingering", 22.5, 420, 100]
]

var sample = {
  "Madelinetosh": {
    "Tosh DK": {
      weight: "dk",
      price: 22,
      yardage: 225,
      grams: 100,
      colorways: [
        "Cosmic Wonder Dust",
        "Stargazer",
        "Edison Bulb",
        "Torchere"
      ]
    },
  }
}

function yarnParser(yarn) {
  var parsedYarn = {};
  yarn.forEach(function(skein) {
    if (skein[0] != "Brand") {
      if (parsedYarn[skein[0]]) { // if brand exists
        if (parsedYarn[skein[0]][skein[1]]) { //if line exists
          parsedYarn[skein[0]][skein[1]].colorways.push(skein[2]);
        } else { // if line doesn't exist
          parsedYarn[skein[0]][skein[1]] = {
            weight: skein[3],
            price: skein[4],
            yardage: skein[5],
            grams: skein[6],
            colorways: [skein[2]]
          };
        };
      } else { // if brand doesn't exist
        parsedYarn[skein[0]] = {};
        parsedYarn[skein[0]][skein[1]] = {
          weight: skein[3],
          price: skein[4],
          yardage: skein[5],
          grams: skein[6],
          colorways: [skein[2]]
        };
      };
    };
  });
  return parsedYarn;
};

console.log(yarnParser(yarn));
