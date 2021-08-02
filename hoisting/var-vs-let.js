/* var VS. let
    var variables get hoisted, let variables do not */

// function expression
var var1 = function () {
  console.log("x: " + x);
}
    
var1()
// x will be undefined
var x = 10;
/* switch var to 'let' and instead of being undefined, you'll see a ReferenceError
*  x is not defined */

/* Example 2 --------------------------- */

var funct2 = function () {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  
  console.log(i);
}

funct2();