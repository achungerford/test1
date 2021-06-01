/* forEach() calls a function one time for each element in an array, in order */

// let bigThree = ['Federer', 'Djokovic', 'Nadal']

// function handed(player) {
//   if (player === 'Federer' || player === 'Djokovic') {
//     console.log('right handed')
//   } else {
//     console.log('left handed')
//   }
// }

// bigThree.forEach(handed)


// ----------------

let numbers = [1, 2, 3, 4, 5]

// function consoleItem(item, index, array) {
//   console.log(item)
// }

// numbers.forEach(consoleItem);

function consoleItem(item, index, array) {
  console.log('index [' + index + '] = element ' + item);
}

numbers.forEach(consoleItem);