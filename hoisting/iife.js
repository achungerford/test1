// Immediately Invoked Function Expressions

/* sometimes we want to write a function and immediately use it,
    and, we'll often only be using that function exactly once;
    this is especially true with callbacks */

// named funtion immediately invoked successfully
(function iife() {
  console.log('named fn immediately invoked')
}());

// anonymous function immediately invoked successfully
(function () { 
  console.log('anon fn immediately invoked')
}());

/* FAILS to execute, no outside parens - syntax errors
function () {
  console.log('immediately execute')
}(); */