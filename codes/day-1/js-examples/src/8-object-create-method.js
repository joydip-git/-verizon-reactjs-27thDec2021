//1. object literal syntax
const joydipOject = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    print: function () {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}
const newObj = Object.create(joydipOject)
console.log(newObj.__proto__)