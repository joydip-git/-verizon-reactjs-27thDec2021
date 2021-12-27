/*
console.log(x)//undefined
var x = 10
console.log(x)//10
for (var i = 0; i < 1; i++) {
    var x = 20
    console.log(x)//20
}
console.log(x)//20
*/

//do not try to use a variable, before its declaration, in case the variable has been declared using let keyword
//console.log(x)//undefined
let x = 10
console.log(x)//10
for (let i = 0; i < 1; i++) {
    let x = 20
    console.log(x)//20
}
console.log(x)//10

const m = 10
//m = 20
console.log(m)

//const numbers = [1, 2, 3, 4]
//numbers--> reference variable to an array object storing 1,2,3,4
const numbers = new Array(1, 2, 3, 4)
//numbers = []
numbers.push(10, 20)
console.log(numbers)