// using slice(), function, if, & early-return statement

// slice(start [, end])  -- [] mean optional parameter
let limit = 2;
const string = "alexander"

const shortened = string.slice(0, limit);
console.log(shortened);  // al


function truncate(string, limit) {
    if (string.length <= limit) {
        return string;
    }
    return string.slice(0, limit) + "...";
}

console.log( truncate('alexander', 5) );