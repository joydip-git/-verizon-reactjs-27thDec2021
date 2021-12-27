const joydipOject = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    print: function () {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}

// const copy = Object.assign({}, joydipOject)
// console.log(copy)

//spread operator
const copy = { ...joydipOject }
console.log(copy)

const numbers1 = [1, 2, 3, 4]
const numbers2 = [10, 20, 30, 40]
const numbers = [...numbers1, ...numbers2]
console.log(numbers)

