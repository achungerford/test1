/* SCOPE & CLOSURE

function scope: functions defined within other functions will have access
    to the parent variables

  below, because child is defined within the scope of parent, it has access
  to parent's varialbes, a & b

  because child is defined AND INVOKED within the scope of parent()
  (i.e. as part of parent's execution when parent is invoked),
  line 29 will output: 5

  line 32 will produce an error bc child is invoked outside of parent and therefore
  does not have access to the necessary variables, a & b
*/

var parent = function parent() {
  let a = 2,
      b = 3

  var child = function child() {
    console.log(a + b)
  }

  child();
}

// parent() will successfully execute: 5
parent();

// child() is undefined, ReferenceError
// child();

// defining another function beyond the scope of parent
var secondChild = function secondChild() {
  console.log(a + b);
}

// a (or b) is not defined, ReferenceError
secondChild();