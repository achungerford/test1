// indexof() & lastIndexOf()
// --------------------------------------

// indexOf() will tell you the position of the first instance of whatever
// you're searching for
let word = "Excalibur";
console.log(word.indexOf("a"));

// if the string that you're looking for is not found, indexOf()
// returns a -1
console.log(word.indexOf("e"));

// what if you want to do a case-insensitive search? Take the lowercase version
// of the string (excalibur)
console.log(word.toLowerCase().indexOf("e"));

// lastIndexOf() - same as indexOf(), but starting from the right instead
console.log( word.lastIndexOf("i") );
// the index position is still counted as if it were from the left though

//-----------------
// using the second parameter we can start the search from a specific index
console.log( word.indexOf("i", 4) );
