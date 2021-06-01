/* map() is very similar in syntax to forEach(),
    but map requires a return statement. Unlike forEach,
    which manipulates your original array, map creates
    a new array. Whatever you return will be the content of
    your new array. */

// goal is to find the length of each item


// example of just returning a new array with 100 using an anonymous function inside map()
const teams = ['Lakers', 'Bulls', 'Nets', 'Grizzlies', 'Trail Blazers', 'Heat', 'Timberwolves']

// let teamLengths = teams.map( function (item, index, array) {
//   return 100
// })

// console.log(teamLengths);

// repeat, but get the length of each team name
let teamLengths = teams.map( function (item, index, array) {
  return item.length
})

console.log(teamLengths);