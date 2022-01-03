// Math.random() generates a fraction/decimal number between 
// zero (inclusive) and 1 (exclusive) -- i.e. [0, 1)

// Math.floor() rounds down to the nearest number

// if we want to produce a random whole number between 0-9
console.log(Math.floor(Math.random() * 10));

/*
    generate a random whole number between a range (excluding zero)
    think of FACTORING in math class
    random decimal [0, 1) * max
    LESS: random decimal [0, 1) * min
    PLUS: random decimal [0, 1)
    Math.floor() rounds that number down to nearest whole number (this is your max)
    Then you just add your min --> max + min 
*/
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myRandom = randomRange(5, 16);
console.log(myRandom);