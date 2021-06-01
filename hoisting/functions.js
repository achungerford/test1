// Function Declarations vs. Function Expressions
// YouTube: https://www.youtube.com/watch?v=gjLn95skIKE&list=PLTo9PCskHpbFKsuQjG99YNwFw1XAQgwXR&index=3

// two ways to define functions in JS 
// function declarations get hoisted; they can be called and executed before/above
// where they get defined in your codebase

// function expressions are functions that are part of a larger functions;
// this is what happens when you use a callback or an immediately invoked function;
// they do not get hoisted. The variable does, but the function does not.

// will print out the definted function; important to note that you're not calling/invoking
// the function here because there are no () after doSomething
console.log(doSomething)
// next we call doSomething and it will print out what we told it to print out
console.log(doSomething())

// Function Declaration
function doSomething() {
  console.log('function declaration; declare something')
}

// this statement for the Function Expression comes out 'undefined'
// because the variable got hoisted, but the program doesn't see anything
// in it yet
console.log(something)

// and if we try to invoke the function we get a TypeError telling us
// 'something' is not a function 
console.log(something())

// Function Expression
let something = function () {
  console.log('function expression; express something')
}

// Why the TypeError? Because during execution, the JS engine hasn't
// yet gotten to the line where a function is assigned to the variable
