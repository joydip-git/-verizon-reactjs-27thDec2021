//function declaration (is hoisted)
console.log(add)
console.log(add(10, 20))
function add(a, b) {
    return a + b
}

console.log(subtract)
//console.log(subtract(10, 2))
//function expression (is not hoisted)
var subtract = function (a, b) {
    return a - b
}
console.log(subtract(10, 2))