//rest operator
const numbers = [1, 2, 3, 4]
const [, ...remaining] = numbers
//console.log(a)
console.log(remaining)

function calculateAverage(name, ...marks) {
    let sum = 0
    for (let index = 0; index < marks.length; index++) {
        const element = marks[index];
        sum += element
    }
    console.log(sum / marks.length)
}

calculateAverage('anil', 10, 20)
calculateAverage('sunil', 10, 20, 30)
calculateAverage('mahesh', 10, 20, 30, 40, 50)