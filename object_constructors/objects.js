/* everything in JS is either an object or a primitive

  constructors allow you to create new instances of an object
  with identical characteristics to other objects created with
  the same constructor

  you invoke the constructor with the keyword "new"
 */

// this is an object literal
var objLiteral = {
  title: "objLiteral",
  a: "An",
  b: "object",
  c: "literal"
}

console.log("characteristics: ", objLiteral);

// objects created from constructors
let Obj1 = new Object(["object", "constructor", '1'])
console.log(objConstructor1)