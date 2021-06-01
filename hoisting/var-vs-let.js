/* var VS. let
    var variables get hoisted, let variables do not
*/

// var1 will be undefined

// function expression
var var1 = function var1() {
  console.log("var1: " + x);
}

var1()
var x = 10;
