const gms = {
  01: 'Ashton',
  02: 'Alex',
  03: 'Brett',
  04: 'Chris',
  05: 'Colby',
  06: 'Dave',
  07: 'Ian',
  08: 'Jack',
  09: 'Jon',
  10: 'Katz',
  11: 'Nate',
  12: 'Todd'
}

// array of years league is active
let years = []

for (let i = 2012; i <= 2021; i++) {
  years.push(i)
}

console.log(years)
// console.log(years, typeof(years))

// array of seasons league is active
let seasons = []
for (let i = 1; i <= 13; i++) {
  seasons.push(i)
}

// console.log(seasons, typeof(seasons[0]), typeof(years[0]))

console.log(gms[01])